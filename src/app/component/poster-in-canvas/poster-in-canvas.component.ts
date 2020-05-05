import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-poster-in-canvas',
  templateUrl: './poster-in-canvas.component.html',
  styleUrls: ['./poster-in-canvas.component.scss'],
})
export class PosterInCanvasComponent implements OnInit {
  billboardForm: FormGroup;

  billboardData;

  imgUrl$: BehaviorSubject<string | null> = new BehaviorSubject(null);

  @ViewChild('fileInput', { static: true }) fileInput;

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) {}

  updateStore(val) {
    let formDataValue = {
      ...this.billboardData,
      ...val,
    };

    this.billboardData = formDataValue;
  }

  ngOnInit() {
    this.billboardForm = this.fb.group({
      title: ['分享会主题名称', Validators.required],
      organization: ['服务平台前端小组', Validators.required],
      time: ['2020年1月1日', Validators.required],
      address: ['北京·阜通·608会议室', Validators.required],
      vol: ['Vol.X / 第X期', Validators.required],
      topics: [
        '新人介绍与欢迎环节 (5min)\n经验与疑问分享 (10min)\n技术前沿讯息分享 (5-10min)\n主题分享 (20-35min)\n其他环节 (TBD)',
        Validators.required,
      ],
      bgColor: ['#FF4C00', Validators.required],
      description: [
        '这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述',
      ],
    });

    this.updateStore(this.billboardForm.value);
    this.billboardForm.valueChanges.pipe(debounceTime(300)).subscribe((value) => this.updateStore(value));
  }

  addImageFile(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      let fileToUpload = fi.files[0];

      let myReader: FileReader = new FileReader();
      myReader.onloadend = (loadEvent: any) => {
        this.updateStore({
          logoPath: loadEvent.target.result,
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

  onSubmit(data) {
    // Todo
  }

  onImageChange(url) {
    this.imgUrl$.next(url);
    this.cdRef.detectChanges();
  }

  // @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
  //   const file = event && event.item(0);

  //   this.updateStore({
  //     logoPath: URL.createObjectURL(file),
  //   });
  // }
}
