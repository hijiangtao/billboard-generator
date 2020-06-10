import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PureCanvasComponent } from './component/pure-canvas/pure-canvas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PosterInCanvasComponent } from './component/poster-in-canvas/poster-in-canvas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { PosterInFabricComponent } from './component/poster-in-fabric/poster-in-fabric.component';
import { FabricCanvasComponent } from './component/fabric-canvas/fabric-canvas.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    PureCanvasComponent,
    PosterInCanvasComponent,
    PosterInFabricComponent,
    FabricCanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzInputModule,
    NzMenuModule,
    NzCardModule,
    NzIconModule,
    NzFormModule,
    NzGridModule,
    NzLayoutModule,
    NzTagModule,
    NzToolTipModule,
    NzUploadModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
