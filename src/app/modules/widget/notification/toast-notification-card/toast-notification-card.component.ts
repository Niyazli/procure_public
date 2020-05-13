import {Component, Input, OnInit} from '@angular/core';
import {Stagger} from '../animations/stagger.animation';
import {NotificationService} from '../notification.service';
import {ErrorModel} from './../model/error.model';
import {ErrorType} from '../model/error-type.enum';

@Component({
  selector: 'lib-toast-notification-card',
  templateUrl: './toast-notification-card.component.html',
  styleUrls: ['./toast-notification-card.component.scss'],
  animations: [Stagger],
})
export class ToastNotificationCardComponent implements OnInit {
  @Input() isVisible = false;
  @Input() placement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  @Input() errors: ErrorModel[] = [];
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
  handleClose(error: ErrorModel) {
    error.opened = false;
  }
}
