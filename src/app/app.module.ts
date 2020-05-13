import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from './modules/layout/layout.module';
import {BackendModule} from './modules/backend/backend.module';
import {environment} from '../environments/environment';
import {NotificationModule} from './modules/widget/notification/notification.module';
import {ToastType} from './modules/widget/notification/model/toast-type.enum';
import {ErrorHintModule} from './modules/widget/error-hint/error-hint.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    NotificationModule.forRoot({
      type: ToastType.Colorized,
      placement: 'top-right',
    }),
    ErrorHintModule.forRoot({
      className: 'error',
      hintClassName: 'error-hint',
    }),
    BackendModule.forRoot({
      apiUrl: environment.apiUrl,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
