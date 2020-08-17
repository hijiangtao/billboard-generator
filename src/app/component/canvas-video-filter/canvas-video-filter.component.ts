import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-video-filter',
  templateUrl: './canvas-video-filter.component.html',
  styleUrls: ['./canvas-video-filter.component.scss'],
})
export class CanvasVideoFilterComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasEle')
  canvasEle: ElementRef;

  @ViewChild('videoEle')
  videoEle: ElementRef;

  canvas: HTMLCanvasElement;
  video: HTMLVideoElement;
  ctx: CanvasRenderingContext2D;

  raf: any;
  isGray = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.canvas = this.canvasEle.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.video = this.videoEle.nativeElement;

    // 视频已准备好时，先在canvas上画一帧，并给两个按钮绑定事件
    this.video.addEventListener('canplay', this.onVideoCanPlayHandler);
  }

  onVideoCanPlayHandler = (e) => {
    const { width, height } = this.canvas;

    this.ctx.drawImage(this.video, 0, 0, width, height);
  };

  toggleVideoStatusChange() {
    if (this.video.paused) {
      // 当前视频暂停
      this.video.play();

      // 实现视频灰度效果
      this.raf = window.requestAnimationFrame(this.draw.bind(this));
    } else {
      this.video.pause();

      // 暂停时 也停止视频灰度效果
      window.cancelAnimationFrame(this.raf);
    }
  }

  toggleGrayStatusChange() {
    this.isGray = !this.isGray;
  }

  draw() {
    const { width, height } = this.canvas;
    this.ctx.drawImage(this.video, 0, 0, width, height);

    const imgData = this.ctx.getImageData(0, 0, width, height);
    const data = imgData.data;

    if (this.isGray) {
      // 求每个像素的红色值、绿色值 和 蓝色值，相加求出平均值，再把平均值赋值给红色、绿色和蓝色
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
      }
      // 把改变后的像素再添加到 canvas中
      this.ctx.putImageData(imgData, 0, 0);
    }

    this.raf = window.requestAnimationFrame(this.draw.bind(this));
  }
}
