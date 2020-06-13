import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { fabric } from 'fabric';
import { CanvasService } from 'src/app/service/canvas.service';

@Component({
  selector: 'app-fabric-canvas',
  templateUrl: './fabric-canvas.component.html',
  styleUrls: ['./fabric-canvas.component.scss'],
})
export class FabricCanvasComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line: variable-name
  _logo: string;

  @Input()
  set logo(val) {
    if (val) {
      this._logo = val;
      this.updateCanvasLogo(val);
    }
  }

  canvas: fabric.Canvas;

  CANVAS_WIDTH = 750;
  CANVAS_HEIGHT = 1240;

  constructor(private cs: CanvasService) {}

  @ViewChild('fabricCanvas', { static: false }) canvasEle: ElementRef;

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.canvas = new fabric.Canvas(this.canvasEle.nativeElement, {
      selection: true,
      backgroundColor: '#FF4C00',
      width: this.CANVAS_WIDTH,
      height: this.CANVAS_HEIGHT,
    });
    this.canvas.setDimensions({ width: '100%', height: 'auto' }, { cssOnly: true });

    this.canvas.add(new fabric.IText('分享会主题', { fontSize: 70, left: 50, top: 50, fill: '#fff' }));
    this.canvas.add(new fabric.IText('XXX前端小组', { left: 50, top: 150, fill: '#fff' }));
    this.canvas.add(
      new fabric.IText('Vol.X / 第X期', { left: this.CANVAS_WIDTH - 120, top: 20, fill: '#fff', fontSize: 15 })
    );
    this.canvas.add(new fabric.IText('- 分享环节1', { left: 50, top: 350, fill: '#fff', fontSize: 30 }));
    this.canvas.add(new fabric.IText('- 分享环节2', { left: 50, top: 400, fill: '#fff', fontSize: 30 }));
    this.canvas.add(new fabric.IText('- 分享环节3', { left: 50, top: 450, fill: '#fff', fontSize: 30 }));
    this.canvas.add(new fabric.IText('- 分享环节4', { left: 50, top: 500, fill: '#fff', fontSize: 30 }));

    this.canvas.add(
      new fabric.Textbox(
        '这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述',
        { left: 50, top: 580, fill: '#fff', fontSize: 20, width: this.CANVAS_WIDTH - 100, splitByGrapheme: true }
      )
    );

    this.canvas.add(
      new fabric.IText('2020年1月1日18:00', { left: 50, top: this.CANVAS_HEIGHT - 90, fill: '#fff', fontSize: 20 })
    );
    this.canvas.add(
      new fabric.IText('北京·望京SOHO', { left: 50, top: this.CANVAS_HEIGHT - 50, fill: '#fff', fontSize: 20 })
    );

    this.canvas.add(new fabric.Circle({ radius: 30, fill: '#288', top: 250, left: 50 }));
  }

  get selection(): fabric.Object {
    return this.canvas.getActiveObject();
  }

  /**
   * 删除选中元素
   */
  deleteSelections(): void {
    this.canvas.remove(this.selection);
  }

  /**
   * 添加元素
   * Todo - 不同类型元素待支持
   */
  addObject() {
    const ele = new fabric.IText('测试文案', {
      left: Math.random() * (this.CANVAS_WIDTH - 30),
      top: Math.random() * (this.CANVAS_HEIGHT - 30),
      fill: '#fff',
    });
    this.canvas.add(ele);
  }

  updateCanvasLogo(val) {
    const imgEl = fabric.util.createImage();
    imgEl.src = val;

    this.canvas.add(
      new fabric.Image(imgEl, {
        width: 1000,
        height: 1000,
        left: 50,
        top: 800,
        scaleX: 0.2,
        scaleY: 0.2,
      })
    );
  }
}
