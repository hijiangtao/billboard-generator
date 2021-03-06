import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { getImageThemeColor, fullColorHex, copyText, calcColorType } from '../../utils/operation';
import { DomSanitizer } from '@angular/platform-browser';

const COLOR_THEMES_CONFIG = {
  dark: ['#000', '#333', '#ec0007'],
  light: ['#fff', '#ccc', '#f4ea2a'],
};

const BILLBOARD_INIT_DATA = {
  title: '分享会主题名称',
  organization: '服务平台前端小组',
  time: '2020年1月1日',
  address: '北京·阜通·608会议室',
  vol: 'X',
  topics:
    '新人介绍与欢迎环节 (5min)\n经验与疑问分享 (10min)\n技术前沿讯息分享 (5-10min)\n主题分享 (20-35min)\n其他环节 (TBD)',
  bgColor: '#FF4C00',
  description:
    '这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述',
  textColors: COLOR_THEMES_CONFIG.light,
};

@Component({
  selector: 'app-poster-in-canvas',
  templateUrl: './poster-in-canvas.component.html',
  styleUrls: ['./poster-in-canvas.component.scss'],
})
export class PosterInCanvasComponent implements OnInit {
  billboardForm: FormGroup = this.fb.group({
    title: [BILLBOARD_INIT_DATA.title, Validators.required],
    organization: [BILLBOARD_INIT_DATA.organization, Validators.required],
    time: [BILLBOARD_INIT_DATA.time, Validators.required],
    address: [BILLBOARD_INIT_DATA.address, Validators.required],
    vol: [BILLBOARD_INIT_DATA.vol, Validators.required],
    topics: [BILLBOARD_INIT_DATA.topics, Validators.required],
    bgColor: [BILLBOARD_INIT_DATA.bgColor, Validators.required],
    description: [BILLBOARD_INIT_DATA.description],
  });

  billboardData$: BehaviorSubject<{
    themeColor?: string; // 主题色
    title?: string;
    oranization?: string;
    time?: string;
    address?: string;
    vol?: string;
    topics?: string;
    bgColor?: string; // 背景色
    description?: string;
    textColors?: string[]; // 文字主色调
  }> = new BehaviorSubject(BILLBOARD_INIT_DATA);

  imgUrl$: BehaviorSubject<string | null> = new BehaviorSubject(null);

  imgThemeColor$: BehaviorSubject<string | null> = new BehaviorSubject(null);

  copyText = copyText;

  @ViewChild('logoPathInput', { static: true }) logoPathInput;
  @ViewChild('themeColorInput', { static: true }) themeColorInput;

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef, private sanitizer: DomSanitizer) {}

  updateStore(val) {
    const formDataValue = {
      ...this.billboardData$.value,
      ...val,
    };

    this.billboardData$.next(formDataValue);
  }

  ngOnInit() {
    this.billboardForm.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(300))
      .subscribe((value) => this.updateStore(value));

    this.billboardData$.pipe(distinctUntilChanged((a, b) => a.bgColor === b.bgColor)).subscribe((billboardData) => {
      const { bgColor } = billboardData;
      const textColors = calcColorType(bgColor) ? COLOR_THEMES_CONFIG.light : COLOR_THEMES_CONFIG.dark;
      this.billboardData$.next({
        ...this.billboardData$.value,
        textColors,
      });
    });
  }

  addImageFile(id = 'logoPathInput', event: { target?: any } = {}): void {
    const fi = event.target || this[id].nativeElement;
    if (fi.files && fi.files[0]) {
      const fileToUpload = fi.files[0];
      const storeKey = id.replace('Input', '');

      const myReader: FileReader = new FileReader();
      myReader.onloadend = (loadEvent: any) => {
        let result = loadEvent.target.result;
        if (id === 'themeColorInput') {
          result = this.sanitizer.bypassSecurityTrustUrl(loadEvent.target.result);
        }

        this.updateStore({
          [storeKey]: result,
        });
      };
      myReader.readAsDataURL(fileToUpload);

      // Another way to create image url
      //
      // this.updateStore({
      //   logoPath: URL.createObjectURL(fileToUpload),
      // });
    }
  }

  onImageChange(url) {
    this.imgUrl$.next(url);
    this.cdRef.detectChanges();
  }

  getThemeColorFromImg() {
    const imgEle = document.getElementById('themeImg') as HTMLImageElement;
    const tc = getImageThemeColor(imgEle);

    this.imgThemeColor$.next(tc ? fullColorHex(tc) : null);
  }
}
