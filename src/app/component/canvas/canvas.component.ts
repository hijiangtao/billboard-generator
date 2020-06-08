import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TextConfig } from 'src/app/data/canvas.interface';
import { CanvasService } from 'src/app/service/canvas.service';

interface BillboardConfig {
  title: string;
  organization: string;
  time: string;
  address: string;
  vol?: string;
  topics?: string;
  description?: string;
  bgColor: string;
  textColors?: string;
  logoPath?: string | null;
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line: variable-name
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

  @Output()
  imageChange = new EventEmitter<string | null>();

  @ViewChild('canvasEle', { static: false }) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;
  dataUrl$: BehaviorSubject<string | null> = new BehaviorSubject(null);

  constructor(private cs: CanvasService) {}

  ngOnInit(): void {
    this.dataUrl$.subscribe((url) => this.imageChange.emit(url));
  }

  ngAfterViewInit(): void {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas.getContext('2d');
    if (this._data) {
      this.renderBillboard(this._data);
    }
  }

  updateDataUrl(newDataUrl) {
    if (this.dataUrl$.value !== newDataUrl) {
      this.dataUrl$.next(newDataUrl);
    }
  }

  renderBillboard(val) {
    const { title, organization, time, address, vol, bgColor, topics, description, logoPath, textColors } = val;
    const [mainContentColor, tagsColor, volColor] = textColors;

    const commonConfig: TextConfig = {
      size: 20,
      color: mainContentColor,
      font: 'bold 20px sans-serif',
      textAlign: 'left',
      textBaseline: 'middle',
    };

    const commonStyle = this.commonStyle;

    this.cs.clearCtx(this.context, this.CANVAS_WIDTH, this.CANVAS_HEIGHT, bgColor);

    const realLogo = logoPath || 'assets/github.svg';

    //
    this.cs.drawImage(
      this.context,
      realLogo,
      this.CANVAS_WIDTH - this.LOGO_SIZE - commonStyle.marginRight,
      commonStyle.marginRight,
      this.LOGO_SIZE,
      this.LOGO_SIZE,
      () => {
        this.updateDataUrl(this.canvas.toDataURL());
      }
    );

    this.cs.fillText(this.context, title, commonStyle.marginLeft, 230, {
      ...commonConfig,
      size: 82,
    });

    this.cs.fillText(this.context, organization, commonStyle.marginLeft, 320, {
      ...commonConfig,
      size: 50,
      color: mainContentColor,
    });

    if (topics) {
      const topicList = topics.split('\n');

      topicList.map((topic, index) => {
        const topicY = commonStyle.topicMarginTop + commonStyle.topicLineheight * index;

        this.cs.fillText(this.context, `- ${topic}`, commonStyle.marginLeft, topicY, {
          ...commonConfig,
          size: commonStyle.topicLineheight / 2,
          color: mainContentColor,
        });
      });
    }

    if (description) {
      this.cs.fillWrappedText(
        this.context,
        description,
        commonStyle.marginLeft,
        topics.split('\n').length * commonStyle.topicLineheight + commonStyle.topicMarginTop + 60,
        this.CANVAS_WIDTH - commonStyle.marginLeft - commonStyle.marginRight,
        40
      );
    }

    this.cs.fillText(this.context, time, commonStyle.marginLeft, this.CANVAS_HEIGHT - 80, {
      ...commonConfig,
      size: 20,
      color: tagsColor,
    });

    this.cs.fillText(this.context, address, commonStyle.marginLeft, this.CANVAS_HEIGHT - 40, {
      ...commonConfig,
      size: 20,
      color: tagsColor,
    });

    const volTextMarginRight = this.CANVAS_WIDTH - commonStyle.marginRight - this.LOGO_SIZE - commonStyle.marginRight;
    const volTextMarginTop = commonStyle.marginRight + this.LOGO_SIZE / 2;
    const volFontsize = 20;

    //
    this.cs.fillText(this.context, vol, volTextMarginRight, volTextMarginTop, {
      ...commonConfig,
      size: volFontsize,
      color: volColor,
      textAlign: 'right',
    });

    try {
      this.updateDataUrl(this.canvas.toDataURL());
    } catch (error) {
      console.error(`[error] ${JSON.stringify(error)}`);
      this.imageChange.emit(null);
    }
  }
}
