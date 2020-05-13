import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {ToastConfig} from './model/toast-config.model';
import {ToastNotificationCardBlankComponent} from './toast-notification-card-blank/toast-notification-card-blank.component';
import {ToastNotificationCardComponent} from './toast-notification-card/toast-notification-card.component';
import {ToastNotificationComponent} from './toast-notification.component';
import {NotificationService} from './notification.service';

@NgModule({
  declarations: [ToastNotificationComponent, ToastNotificationCardComponent, ToastNotificationCardBlankComponent],
  imports: [CommonModule],
  providers: [NotificationService],
  exports: [ToastNotificationComponent],
})
export class NotificationModule {
  static forRoot(config: ToastConfig): ModuleWithProviders {
    return {
      ngModule: NotificationModule,
      providers: [{provide: ToastConfig, useValue: config}],
    };
  }
}
