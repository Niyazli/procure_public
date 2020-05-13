import {Component, Input, OnInit} from '@angular/core';
import {Stagger} from '../animations/stagger.animation';
import {ErrorModel} from '../model/error.model';
import {NotificationService} from '../notification.service';
import {ErrorType} from '../model/error-type.enum';

@Component({
  selector: 'lib-toast-notification-card-blank',
  templateUrl: './toast-notification-card-blank.component.html',
  styleUrls: ['./toast-notification-card-blank.component.scss'],
  animations: [Stagger],
})
export class ToastNotificationCardBlankComponent implements OnInit {
  @Input() isVisible = false;
  @Input() errors: ErrorModel[] = [];
  @Input() placement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  constructor(private readonly toast: NotificationService) {}
  getErrorType(type: ErrorType) {
    return this.toast.getErrorType(type);
  }

  ngOnInit(): void {
    if (!this.placement) {
      this.placement = 'top-right';
    }
  }
  getErrorsToShow() {
    return this.errors.filter(e => e.opened);
  }
  closeAll() {
    this.toast.triggerVisibility.next({state: 'hidden', errors: []});
  }
  handleClose(error: ErrorModel) {
    error.opened = false;
  }
}
