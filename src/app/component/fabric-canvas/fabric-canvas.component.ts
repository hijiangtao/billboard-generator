import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-fabric-canvas',
  templateUrl: './fabric-canvas.component.html',
  styleUrls: ['./fabric-canvas.component.scss'],
})
export class FabricCanvasComponent implements OnInit, AfterViewInit {
  canvas: fabric.Canvas;

  CANVAS_WIDTH = 750;
  CANVAS_HEIGHT = 1240;

  constructor() {}

  @ViewChild('fabricCanvas', { static: false }) canvasEle: ElementRef;

  ngOnInit() {}

  ngAfterViewInit(): void {
    console.log(fabric.version);
    console.log(this.canvasEle);
    this.canvas = new fabric.Canvas(this.canvasEle.nativeElement, { selection: true, backgroundColor: '#FF4C00' });
    this.canvas.setWidth(this.CANVAS_WIDTH);
    this.canvas.setHeight(this.CANVAS_HEIGHT);
    this.canvas.add(new fabric.IText('前端小组', { left: 50, top: 50, fill: '#fff' }));
    this.canvas.add(new fabric.IText('分享会名称', { left: 50, top: 150, fill: '#fff' }));
    this.canvas.add(new fabric.IText('分享环节1', { left: 50, top: 350, fill: '#fff', fontSize: 30 }));
    this.canvas.add(new fabric.IText('分享环节2', { left: 50, top: 400, fill: '#fff', fontSize: 30 }));
    this.canvas.add(new fabric.IText('分享环节3', { left: 50, top: 450, fill: '#fff', fontSize: 30 }));
    this.canvas.add(
      new fabric.Textbox(
        '这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述',
        { left: 50, top: 550, fill: '#fff', fontSize: 20, width: 500, splitByGrapheme: true }
      )
    );
    this.canvas.add(new fabric.Circle({ radius: 30, fill: '#288', top: 250, left: 50 }));
  }
}
