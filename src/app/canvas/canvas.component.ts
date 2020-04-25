import { Component, OnInit, Input, TemplateRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

interface BillboardConfig {
  title: string;
  organization: string;
  time: string;
  address: string;
  vol?: string;
  topics?: string;
  description?: string;
  bgColor: string;
  logoPath?: string | null;
}

interface FontItemConfig {
  size?: number;
  color?: string;
  font?: string;
  textBaseline?: CanvasTextBaseline;
  textAlign?: CanvasTextAlign;
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  _data: any;

  CANVAS_WIDTH = 750;
  CANVAS_HEIGHT = 1240;
  LOGO_SIZE = 100;

  commonStyle = {
    marginLeft: 30,
    marginRight: 30,
    topicMarginTop: 440,
    topicLineheight: 50,
  };

  @Input()
  set info(val) {
    this._data = val;
    if (this.context && val) {
      this.renderBillboard(val);
    }
  }

  @ViewChild('canvasEle', { static: false }) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    if (this._data) {
      this.renderBillboard(this._data);
    }
  }

  renderBillboard(val) {
    const { title, organization, time, address, vol, bgColor, topics, description, logoPath } = val;

    const commonConfig: FontItemConfig = {
      size: 20,
      color: '#fff',
      font: 'bold 20px sans-serif',
      textAlign: 'left',
      textBaseline: 'middle',
    };

    const commonStyle = this.commonStyle;

    this.clearCanvas(this.context, bgColor);

    const realLogo = logoPath || 'assets/github.svg';

    //
    this.drawLogo(realLogo, this.CANVAS_WIDTH - this.LOGO_SIZE - commonStyle.marginRight, commonStyle.marginRight);

    this.drawTextItem(title, commonStyle.marginLeft, 230, {
      ...commonConfig,
      size: 82,
    });

    this.drawTextItem(organization, commonStyle.marginLeft, 320, {
      ...commonConfig,
      size: 50,
      color: '#eee',
    });

    if (topics) {
      const topicList = topics.split('\n');

      topicList.map((topic, index) => {
        const topicY = commonStyle.topicMarginTop + commonStyle.topicLineheight * index;

        this.drawTextItem(`- ${topic}`, commonStyle.marginLeft, topicY, {
          ...commonConfig,
          size: commonStyle.topicLineheight / 2,
        });
      });
    }

    if (description) {
      this.wrapText(
        this.context,
        description,
        commonStyle.marginLeft,
        topics.split('\n').length * commonStyle.topicLineheight + commonStyle.topicMarginTop + 60,
        this.CANVAS_WIDTH - commonStyle.marginLeft - commonStyle.marginRight,
        40
      );
    }

    this.drawTextItem(time, commonStyle.marginLeft, this.CANVAS_HEIGHT - 80, {
      ...commonConfig,
      size: 20,
      color: '#000',
    });

    this.drawTextItem(address, commonStyle.marginLeft, this.CANVAS_HEIGHT - 40, {
      ...commonConfig,
      size: 20,
      color: '#000',
    });

    const volTextMarginRight = this.CANVAS_WIDTH - commonStyle.marginRight - this.LOGO_SIZE - commonStyle.marginRight;
    const volTextMarginTop = commonStyle.marginRight + this.LOGO_SIZE / 2;
    const volFontsize = 20;
    this.drawTextItem(vol, volTextMarginRight, volTextMarginTop, {
      ...commonConfig,
      size: volFontsize,
      color: '#f4ea2a',
      textAlign: 'right',
    });
  }

  drawTextItem(text: string, x: number, y: number, fontConfig: FontItemConfig) {
    if (!text || x === undefined || y === undefined) {
      throw new Error('Lack of necessary parameters.');
    }
    this.context.fillStyle = fontConfig.color || '#fff';
    this.context.font = `bold ${fontConfig.size || 20}px sans-serif`;
    this.context.textAlign = fontConfig.textAlign || 'left';
    this.context.textBaseline = fontConfig.textBaseline || 'middle';
    this.context.fillText(text, x, y);
  }

  drawLogo(file, x: number, y: number) {
    let img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      this.context.drawImage(img, x, y, this.LOGO_SIZE, this.LOGO_SIZE);
    };
    img.onerror = (err) => {
      console.error(err);
    };

    img.src = file;
  }

  clearCanvas(ctx: CanvasRenderingContext2D, bgColor: string) {
    ctx.fillStyle = bgColor || '#FF4C00';
    ctx.beginPath();
    ctx.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    ctx.closePath();
  }

  getBase64Image(img: HTMLImageElement) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  wrapText(
    context: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    wrapWithNewline: boolean = true
  ) {
    const lines = wrapWithNewline ? text.split('\n') : [text];

    context.save();
    context.font = `normal 20px sans-serif`;
    lines.map((line) => {
      console.log('line is ', line);
      let linetext = '';
      const words = line.split('');

      for (let n = 0; n < words.length; n++) {
        let testLine = linetext + words[n];
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(linetext, x, y);
          linetext = words[n];
          y += lineHeight;
        } else {
          linetext = testLine;
        }
      }

      if (linetext) {
        context.fillText(linetext, x, y);
      }
      y += lineHeight;
    });

    context.restore();
  }
}
