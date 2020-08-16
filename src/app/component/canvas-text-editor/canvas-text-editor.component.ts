import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

declare const MediaRecorder: any;

enum TextType {
  CHINESE,
  ENGLISH,
}

const OPTIONS = {
  x: 10,
  y: 10,
  width: 2000,
  height: 900,
  fontSize: 100,
  lineHeight: 120,
  selectionBgColor: 'rgba(0,0,0,0.5)',
};

@Component({
  selector: 'app-canvas-text-editor',
  templateUrl: './canvas-text-editor.component.html',
  styleUrls: ['./canvas-text-editor.component.scss'],
})
export class CanvasTextEditorComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('textEditor')
  textEditor: ElementRef;

  @ViewChild('textArea')
  textArea: ElementRef;

  @ViewChild('videoContainer')
  videoContainer: ElementRef;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  textElement: HTMLTextAreaElement;
  recorder: any;

  scaleRatio = 1;
  textInputType: TextType = TextType.ENGLISH;
  textList: string[] = ['这是一段初始化文案', '就这样吧'];
  cursorPos: number[] = [0, 0];

  /**
   * Command 键是否被按下
   */
  isCommandKey: boolean;

  /**
   * 是否聚焦文本编辑器
   */
  isTextSelected: boolean;

  /**
   * 文本是否全选
   */
  isSelectAll = false;

  cursorTextList: any = [];

  videoUrl$: ReplaySubject<SafeUrl> = new ReplaySubject(1);
  recordVideo$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.canvas = this.textEditor.nativeElement;
    this.context = this.canvas.getContext('2d');
    this.textElement = this.textArea.nativeElement;
    this.scaleRatio = this.canvas.clientWidth / this.canvas.width;

    this.initTextEditorLogic();
    this.drawTextEditorLogic(true);
  }

  initTextEditorLogic() {
    this.canvas.addEventListener('click', this.focusEditorHandler.bind(this));
    document.addEventListener('click', this.blurEditorHandler.bind(this));

    this.textElement.addEventListener('compositionstart', this.chineseTextInputHandler, false);
    this.textElement.addEventListener('input', this.normalTextInputHandler, false);
    this.textElement.addEventListener('compositionend', this.commonTextInputEndHandler, false);

    this.textElement.addEventListener('keydown', this.onKeyDownHandler.bind(this));
    this.textElement.addEventListener('keyup', this.onKeyUpHandler.bind(this));
  }

  /**
   * Event Handlers
   */

  chineseTextInputHandler = () => {
    this.textInputType = TextType.CHINESE;
  };

  normalTextInputHandler = (e) => {
    if (this.textInputType === TextType.CHINESE) {
      return;
    }

    // 处理英文输入
    this.updateTextList(e.data);
    this.drawTextEditorLogic(true);
  };

  commonTextInputEndHandler = (e) => {
    if (this.textInputType === TextType.CHINESE) {
      this.updateTextList(e.data);
      this.drawTextEditorLogic(true);
      this.textInputType = TextType.ENGLISH;
    }
  };

  focusEditorHandler(e) {
    this.canvas.style.borderColor = '#f00';

    const clientX = e.offsetX / this.scaleRatio;
    const clientY = e.offsetY / this.scaleRatio;
    const { colIndex, rowIndex } = this.calculateCursorPos(clientX, clientY);

    this.textElement.focus();
    this.cursorPos = [rowIndex, colIndex];
    this.isTextSelected = true;
    this.drawTextEditorLogic(true);
  }

  blurEditorHandler(e) {
    if (e.target !== this.canvas) {
      this.canvas.style.borderColor = 'gray';
      this.isTextSelected = false;
    }
    this.isSelectAll = false;
    this.drawTextEditorLogic(true);
  }

  onKeyUpHandler() {
    this.isCommandKey = false;
    this.drawTextEditorLogic(true);
  }

  onKeyDownHandler(e) {
    switch (e.key) {
      case 'Meta':
      case 'Control':
        this.isCommandKey = true;
        break;
      case 'a':
        this.onAKeyHandler();
        break;
      case 'Backspace':
        this.onBackspaceKeyHandler();
        break;
      case 'ArrowRight':
        this.onHorizontalArrowKeyHandler('right');
        break;
      case 'ArrowLeft':
        this.onHorizontalArrowKeyHandler('left');
        break;

      case 'ArrowUp':
        this.onVerticalArrowKeyHandler('up');
        break;
      case 'ArrowDown':
        this.onVerticalArrowKeyHandler('down');
        break;
      case 'Enter':
        this.onEnterKeyHandler();
        break;
    }
  }

  onAKeyHandler() {
    if (this.isCommandKey) {
      this.isSelectAll = true;
    }
  }

  onEnterKeyHandler() {
    const arr = this.textList.concat([]);
    const index = this.cursorPos[0];
    arr.splice(index + 1, 0, '');
    this.textList = arr;
    this.cursorPos[0]++;
    this.cursorPos[1] = 0;
  }

  onHorizontalArrowKeyHandler(direction: 'right' | 'left') {
    switch (direction) {
      case 'right':
        this.cursorPos[1] += 1;
        if (this.cursorPos[1] > this.textList[this.cursorPos[0]].length) {
          if (this.cursorPos[0] < this.textList.length - 1) {
            this.cursorPos[0]++;
            this.cursorPos[1] = 0;
          } else {
            this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
          }
        }
        break;
      case 'left':
      default:
        this.cursorPos[1] -= 1;
        if (this.cursorPos[1] < 0) {
          if (this.cursorPos[0] > 0) {
            this.cursorPos[0]--;
            this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
          } else {
            this.cursorPos[1] = 0;
          }
        }
        break;
    }
  }

  onVerticalArrowKeyHandler(direction: 'up' | 'down') {
    switch (direction) {
      case 'up':
        // 边界判断
        if (this.cursorPos[0] > 0) {
          this.cursorPos[0]--;
          if (this.cursorPos[1] > this.textList[this.cursorPos[0]].length) {
            this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
          }
        }
        break;
      case 'down':
        if (this.cursorPos[0] < this.textList.length - 1) {
          this.cursorPos[0]++;
          if (this.cursorPos[1] > this.textList[this.cursorPos[0]].length) {
            this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
          }
        }
        break;
    }
  }

  onBackspaceKeyHandler() {
    if (this.isSelectAll) {
      this.cursorPos = [0, 0];
      this.textList = [];
      this.isSelectAll = false;
    } else {
      for (let i = 0; i < this.textList.length; i++) {
        if (i === this.cursorPos[0]) {
          const str = this.textList[i].split('');
          str.splice(this.cursorPos[1] - 1, 1);

          this.textList[i] = str.join('');

          this.cursorPos[1] -= 1;
          // 换行
          if (this.cursorPos[1] < 0) {
            if (i !== 0) {
              const [delString] = this.textList.splice(this.cursorPos[0], 1);
              this.cursorPos = [i - 1, this.textList[i - 1].length];
              this.textList[i - 1] += delString;
            } else {
              this.cursorPos[1] = 0;
            }
          }
        }
      }
    }
  }

  /**
   * 计算光标位置
   * @param x 水平像素坐标
   * @param y 垂直像素坐标
   */
  calculateCursorPos(x: number, y: number) {
    let colIndex = 0;
    let rowIndex = 0;

    // 计算垂直位于哪一行
    for (let i = 0; i < this.cursorTextList.length; i++) {
      const { start, end } = this.cursorTextList[i][0].y;

      if (start < y && y < end) {
        rowIndex = i;
        break;
      }
    }

    // 计算水平位于哪一列
    for (let j = 0; j < this.cursorTextList[rowIndex]?.length; j++) {
      const abs = Math.abs(this.cursorTextList[rowIndex][j].x - x);
      if (abs <= OPTIONS.fontSize / 2) {
        colIndex = j;
        break;
      }
    }
    return { colIndex, rowIndex };
  }

  updateTextList(data: string) {
    const [startIndex, endIndex] = this.cursorPos;
    const arr = this.textList[startIndex]?.split('') || [];
    arr.splice(endIndex, 0, data);
    this.textList[startIndex] = arr.join('');
    const strLength = data?.length || 0;
    this.cursorPos[1] = endIndex + strLength;
  }

  relocateTextList = () => {
    this.context.save();

    this.context.font = `${OPTIONS.fontSize}px Arial`;
    this.context.lineWidth = 1;

    this.cursorTextList = [];
    this.context.textBaseline = 'bottom';
    for (let i = 0; i < this.textList.length; i++) {
      const str = this.textList[i];
      const arr = this.textList[i].split('');
      const curLocalItem = [];
      for (let j = 0; j < arr.length; j++) {
        const x = OPTIONS.x + this.context.measureText(str.slice(0, j)).width;
        const ystart = OPTIONS.y + OPTIONS.lineHeight * i;
        const yend = ystart + OPTIONS.lineHeight;
        curLocalItem.push({ x, y: { start: ystart, end: yend } });
      }
      this.cursorTextList.push(curLocalItem);
    }

    this.context.restore();
  };

  drawTextEditorLogic(raf: boolean = false) {
    this.context.fillStyle = '#fff';
    this.context.fillRect(0, 0, OPTIONS.width, OPTIONS.height);
    this.context.font = `${OPTIONS.fontSize}px Arial`;
    this.context.fillStyle = this.isTextSelected ? '#000' : '#555';
    this.context.textBaseline = 'middle';

    this.relocateTextList();

    for (let i = 0; i < this.textList.length; i++) {
      let str = '';
      for (let j = 0; j < this.textList[i].length; j++) {
        if (this.isTextSelected && !this.isSelectAll && this.cursorPos[0] === i && this.cursorPos[1] === j) {
          str += '|';
        }
        str += this.textList[i][j];
      }

      // 选中区域的设置，设置选中区域的背景
      if (this.isSelectAll) {
        const selectionWidth = this.context.measureText(this.textList[i]).width;
        this.context.fillStyle = OPTIONS.selectionBgColor;
        this.context.fillRect(OPTIONS.x, OPTIONS.y + OPTIONS.lineHeight * i, selectionWidth, OPTIONS.lineHeight);
      }

      // 开始绘制文字
      this.context.fillText(str, OPTIONS.x, OPTIONS.y + OPTIONS.lineHeight * (i + 0.5));
    }
  }

  startRecording() {
    const stream = (this.canvas as any).captureStream();
    this.recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

    const data = [];
    this.recorder.ondataavailable = (event) => {
      if (event.data && event.data.size) {
        data.push(event.data);
      }
    };

    this.recorder.onstop = () => {
      const url = URL.createObjectURL(new Blob(data, { type: 'video/webm' }));

      this.videoUrl$.next(this.sanitizer.bypassSecurityTrustUrl(url));
    };

    this.recorder.start();
    this.recordVideo$.next(true);
  }

  stopRecording() {
    this.recorder.stop();
    this.recordVideo$.next(false);
  }

  ngOnDestroy() {
    this.recorder = null;

    this.canvas.removeEventListener('click', this.focusEditorHandler.bind(this));
    document.removeEventListener('click', this.blurEditorHandler.bind(this));

    this.textElement.removeEventListener('compositionstart', this.chineseTextInputHandler, false);
    this.textElement.removeEventListener('input', this.normalTextInputHandler, false);
    this.textElement.removeEventListener('compositionend', this.commonTextInputEndHandler, false);

    this.textElement.removeEventListener('keydown', this.onKeyDownHandler.bind(this));
    this.textElement.removeEventListener('keyup', this.onKeyUpHandler.bind(this));
  }
}
