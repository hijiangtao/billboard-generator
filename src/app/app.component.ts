import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Billboard Generator';

  billboardForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  get billboardData() {
    let formDataValue = this.billboardForm.value;

    return formDataValue;
  }

  ngOnInit() {
    this.billboardForm = this.fb.group({
      title: ['分享会主题名称', Validators.required],
      organization: ['Focus 前端小组', Validators.required],
      time: ['2020年1月1日', Validators.required],
      address: ['北京·阜通·608会议室', Validators.required],
      vol: ['第X期', Validators.required],
      topics: ['测试主题1 @hijiangtao\n测试主题2 @hijiangtao\n测试主题3 @hijiangtao\n', Validators.required],
      logo: [null],
    });
  }

  onSubmit(data) {
    // Todo
  }
}
