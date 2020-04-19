import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Billboard Generator';

  billboardForm: FormGroup;

  billboardData;

  @ViewChild("fileInput", {static: true}) fileInput;

  constructor(private fb: FormBuilder) { }

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
      organization: ['Focus 前端小组', Validators.required],
      time: ['2020年1月1日', Validators.required],
      address: ['北京·阜通·608会议室', Validators.required],
      vol: ['第X期', Validators.required],
      topics: ['测试主题1 @hijiangtao\n测试主题2 @hijiangtao\n鼠标事件基础回顾 @hijiangtao\nAngular ControlValueAccessor 介绍与实战 @hijiangtao\n关于 Angular NgZone 的一些介绍 @hijiangtao', Validators.required],
    });

    this.updateStore(this.billboardForm.value);
    this.billboardForm.valueChanges.subscribe(value => this.updateStore(value));
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
    }
  }

  onSubmit(data) {
    // Todo
  }
}
