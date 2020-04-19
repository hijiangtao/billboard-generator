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
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  _data: any;

  CANVAS_WIDTH = 750;
  CANVAS_HEIGHT = 1240;
  LOGO_SIZE = 50;
  
  @Input()
  set info(val) {
    console.log('传入数据为', val);

    this._data = val;
    if (this.context) {
      this.renderBillboard(val);
    }
  };

  @ViewChild('canvasEle', {static: false}) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.renderBillboard(this._data);
  }

  renderBillboard(val) {
    const {
      title,
      organization,
      time,
      address,
      vol,
      topics,
      logo = 'assets/github.svg',
    } = val;

    const commonConfig: FontItemConfig = {
      size: 20,
      color: '#fff',
      font: 'bold 20px sans-serif',
      textAlign: 'left',
      textBaseline: 'middle',
    };

    const commonStyle = {
      marginLeft: 30,
      marginRight: 30,
      topicMarginTop: 440,
      topicLineheight: 50,
    };

    this.clearCanvas(this.context);

    // 
    this.drawLogo(logo || 'assets/github.svg', this.CANVAS_WIDTH - this.LOGO_SIZE - commonStyle.marginRight, commonStyle.marginRight);

    this.drawTextItem(title, commonStyle.marginLeft, 230, {
      ...commonConfig,
      size: 86,
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
          size: commonStyle.topicLineheight / 2
        });
      });
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

    this.drawTextItem(vol, this.CANVAS_WIDTH - commonStyle.marginRight, commonStyle.marginRight + this.LOGO_SIZE + 30, {
      ...commonConfig,
      size: 20,
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
        this.context.drawImage(
          img,
          x,
          y,
          this.LOGO_SIZE,
          this.LOGO_SIZE,
        )
      };
      img.onerror = (err) => {
         console.error(err);
      };
    
      img.src = file;
  }

  clearCanvas(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#FF4C00";
    // ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    ctx.beginPath();
    ctx.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);  
    ctx.closePath();  
  }

 getBase64Image(img: HTMLImageElement) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

}
