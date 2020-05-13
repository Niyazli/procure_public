import {Component, OnInit} from '@angular/core';
import {delay, tap, take} from 'rxjs/operators';
import {ErrorModel} from './model/error.model';
import {NotificationService} from './notification.service';
import {ToastType} from './model/toast-type.enum';

@Component({
  selector: 'int-toast-notification',
  template: `
    <lib-toast-notification-card [placement]="placement" *ngIf="isColorized()" [errors]="errors" [isVisible]="isVisible"></lib-toast-notification-card>
    <lib-toast-notification-card-blank [placement]="placement" *ngIf="isDefault()" [errors]="errors" [isVisible]="isVisible"></lib-toast-notification-card-blank>
  `,
  styles: [],
})
export class ToastNotificationComponent implements OnInit {
  isVisible = false;
  errors: ErrorModel[] = [];
  placement = this.toast.placement;
  constructor(private readonly toast: NotificationService) {}
  isDefault() {
    return this.toast.type === ToastType.Default;
  }
  isColorized() {
    return this.toast.type === ToastType.Colorized;
  }
  ngOnInit() {
    this.toast.triggerVisibility
      .pipe(
        tap(res => {
          this.isVisible = this.handleStateChanges(res.state);
          if (res.errors) {
            this.errors = res.errors.map(e => {
              return {...e, opened: true};
            }) as ErrorModel[];
          }
        }),
        delay(10000),
        tap(() => {
          if (this.isVisible) {
            this.toast.triggerVisibility.next({state: 'hidden', errors: []});
          }
        })
      )
      .subscribe(() => {});
  }
  handleClose(error: ErrorModel) {
    error.opened = false;
  }
  handleStateChanges(state: 'visible' | 'hidden') {
    switch (state) {
      case 'visible':
        return true;
      case 'hidden':
        return false;
      default:
        return false;
    }
  }
}
