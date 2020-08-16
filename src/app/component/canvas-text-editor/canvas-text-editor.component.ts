import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

enum TextType {
  CHINESE,
  ENGLISH,
}

const OPTIONS = {
  x: 10,
  y: 10,
  fontSize: 100,
  lineHeight: 140,
};

@Component({
  selector: 'app-canvas-text-editor',
  templateUrl: './canvas-text-editor.component.html',
  styleUrls: ['./canvas-text-editor.component.scss'],
})
export class CanvasTextEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('textEditor')
  textEditor: ElementRef;

  @ViewChild('textArea')
  textArea: ElementRef;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  textInputType: TextType;

  textList: string[] = ['这是一段初始化文案', '就这样吧'];
  cursorPos: number[] = [0, 0];
  isCommandKey: boolean;
  selected: any;
  localArr: any = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.canvas = this.textEditor.nativeElement;
    this.context = this.canvas.getContext('2d');

    this.initTextEditor();
    this.initTextInputListener();
    this.renderEditorContent();
  }

  initTextEditor() {
    this.canvas.addEventListener('click', this.focusOnEditor.bind(this));

    document.addEventListener('click', (e) => {
      if (e.target !== this.canvas) {
        this.canvas.style.borderColor = 'gray';
      }
    });
  }

  calculateCursorPos(x, y) {
    let isMoved = false;
    let xLabel = 0;
    let yLabel = 0;

    // 计算垂直位于哪一行
    for (let i = 0; i < this.localArr.length; i++) {
      const start = this.localArr[i][0].y.start;
      const end = this.localArr[i][0].y.end;
      if (start < y && y < end) {
        yLabel = i;
      }
    }
    // 计算水平位于哪一列
    for (let j = 0; j < this.localArr[yLabel]?.length; j++) {
      // 计算水平位于哪一个位置，即与所有点相比较，最近的也就是绝对距离较为小的那个点
      const abs = Math.abs(this.localArr[yLabel][j].x - x);
      if (abs <= OPTIONS.fontSize / 2) {
        isMoved = true;
        xLabel = j;
        break;
      }
    }
    return { isMoved, xLabel, yLabel };
  }

  focusOnEditor(e) {
    this.canvas.style.borderColor = '#f00';
    const scale = this.canvas.clientWidth / this.canvas.width;
    const clientX = e.offsetX / scale;
    const clientY = e.offsetY / scale;
    // console.log(clientX, clientY, e, scale, this.canvas);
    const { xLabel, yLabel } = this.calculateCursorPos(clientX, clientY);

    this.textArea.nativeElement.focus();

    this.cursorPos = [yLabel, xLabel];

    this.renderEditorContent();
  }

  updateTextList(data) {
    const [startIndex, endIndex] = this.cursorPos;
    const arr = this.textList[startIndex]?.split('') || [];
    arr.splice(endIndex, 0, data);
    this.textList[startIndex] = arr.join('');
    const strLength = data?.length || 0;
    this.cursorPos[1] = endIndex + strLength;
  }

  initTextInputListener() {
    this.textArea.nativeElement.addEventListener(
      'compositionstart',
      (e) => {
        // console.log(e.data);
        this.textInputType = TextType.CHINESE;
      },
      false
    );
    this.textArea.nativeElement.addEventListener(
      'input',
      (e) => {
        // console.log(e.data);

        if (this.textInputType === TextType.CHINESE) {
          return;
        }
        // 处理英文输入
        this.updateTextList(e.data);

        this.textInputType = TextType.ENGLISH;
        this.renderEditorContent();
      },
      false
    );

    // 中文输入
    this.textArea.nativeElement.addEventListener(
      'compositionend',
      (e) => {
        if (this.textInputType === TextType.CHINESE) {
          this.updateTextList(e.data);
          this.renderEditorContent();
          this.textInputType = TextType.ENGLISH;
        }
      },
      false
    );

    this.textArea.nativeElement.addEventListener('keydown', this.onKeyDown.bind(this));
    this.textArea.nativeElement.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyUp() {
    this.isCommandKey = false;
    this.renderEditorContent();
  }

  onKeyDown(e) {
    switch (e.key) {
      case 'Meta':
      case 'Control':
        this.isCommandKey = true;
        break;
      case 'a':
        if (this.isCommandKey === true) {
          this.selected = true;
          this.renderEditorContent();
        }
        break;
      case 'Backspace':
        if (this.selected) {
          this.cursorPos = [0, 0];
          this.textList = [];
          this.selected = false;
          this.renderEditorContent();
        } else {
          for (let i = 0; i < this.textList.length; i++) {
            let str = '';
            for (let j = 0; j < this.textList[i].length; j++) {
              if (i === this.cursorPos[0]) {
                if (j !== this.cursorPos[1] - 1) {
                  str += this.textList[i][j];
                }
              } else {
                str += this.textList[i][j];
              }
            }
            this.textList[i] = str;

            if (i === this.cursorPos[0]) {
              this.cursorPos[1]--;
              // 换行
              if (this.cursorPos[1] < 0) {
                if (i !== 0) {
                  debugger;
                  // 删除一行
                  this.textList.splice(this.cursorPos[0], 1);
                  this.cursorPos = [i - 1, this.textList[i - 1].length];
                } else {
                  this.cursorPos[1] = 0;
                }
              }
            }
            this.renderEditorContent();
          }
        }
        break;
      case 'ArrowRight':
        this.cursorPos[1] += 1;
        if (this.cursorPos[1] > this.textList[this.cursorPos[0]].length) {
          if (this.cursorPos[0] < this.textList.length - 1) {
            this.cursorPos[0]++;
            this.cursorPos[1] = 0;
          } else {
            this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
          }
        }
        this.renderEditorContent();
        break;
      case 'ArrowLeft':
        this.cursorPos[1] -= 1;
        if (this.cursorPos[1] < 0) {
          if (this.cursorPos[0] > 0) {
            this.cursorPos[0]--;
            this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
          } else {
            this.cursorPos[1] = 0;
          }
        }

        this.renderEditorContent();
        break;

      case 'ArrowUp':
        // 边界判断
        if (this.cursorPos[0] > 0) {
          this.cursorPos[0]--;
          if (this.cursorPos[1] > this.textList[this.cursorPos[0]].length) {
            this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
          }
        }
        break;
      case 'ArrowDown':
        if (this.cursorPos[0] < this.textList.length - 1) {
          this.cursorPos[0]++;
          if (this.cursorPos[1] > this.textList[this.cursorPos[0]].length) {
            this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
          }
        }
        break;
      case 'Enter':
        const arr = this.textList.concat([]);
        const index = this.cursorPos[0];
        arr.splice(index + 1, 0, '');
        this.textList = arr;
        this.cursorPos[0]++;
        this.cursorPos[1] = 0;
        this.renderEditorContent();
        break;
    }
  }

  relocateTextList = () => {
    this.context.font = `${OPTIONS.fontSize}px Arial`;
    this.context.lineWidth = 1;

    // Relocate
    this.localArr = [];
    this.context.textBaseline = 'bottom';
    for (let i = 0; i < this.textList.length; i++) {
      const str = this.textList[i];
      const arr = this.textList[i].split('');
      const curLocalItem = [];
      for (let j = 0; j < arr.length; j++) {
        const x = OPTIONS.x + this.canvas.offsetLeft + this.context.measureText(str.slice(0, j)).width;
        const ystart = OPTIONS.y + this.canvas.offsetTop + OPTIONS.lineHeight * i;
        const yend = ystart + OPTIONS.lineHeight;
        curLocalItem.push({ x, y: { start: ystart, end: yend } });
      }
      this.localArr.push(curLocalItem);
    }
  };

  renderEditorContent() {
    this.context.clearRect(0, 0, 2000, 900);
    this.context.font = `${OPTIONS.fontSize}px Arial`;
    this.context.fillStyle = '#000';

    this.relocateTextList();

    // write text
    // 二维而言,就是一个二维的数组
    for (let i = 0; i < this.textList.length; i++) {
      let str = '';
      for (let j = 0; j < this.textList[i].length; j++) {
        if (!this.selected && this.cursorPos[0] === i && this.cursorPos[1] === j) {
          str += '|';
        }
        str += this.textList[i][j];
      }

      // 选中区域的设置，设置选中区域的背景
      if (this.selected) {
        let _width = this.context.measureText(this.textList[i]).width;
        this.context.fillStyle = 'rgba(0,0,0,0.5)';
        this.context.fillRect(OPTIONS.x, OPTIONS.y + OPTIONS.lineHeight * i, _width, OPTIONS.lineHeight);
      }
      // 开始绘制文字
      this.context.fillText(str, OPTIONS.x, OPTIONS.y + OPTIONS.lineHeight * (i + 1));
    }
  }
}
