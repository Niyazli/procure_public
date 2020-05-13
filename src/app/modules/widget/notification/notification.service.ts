import {Injectable, Optional} from '@angular/core';
import {Subject} from 'rxjs';
import {ErrorModel} from './model/error.model';
import {ToastConfig} from './model/toast-config.model';
import {ErrorType} from './model/error-type.enum';
import {ToastType} from './model/toast-type.enum';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public type: ToastType;
  public placement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  public triggerVisibility: Subject<{state: 'visible' | 'hidden'; errors: ErrorModel[]}> = new Subject<{
    state: 'visible' | 'hidden';
    errors: ErrorModel[];
  }>();
  constructor(@Optional() config: ToastConfig) {
    this.type = config ? config.type : ToastType.Default;
    this.placement = config ? config.placement : 'top-right';
  }
  showSuccess(message: string) {
    const error = new ErrorModel()
    error.buildSuccess(message);
    this.triggerVisibility.next({state: 'visible', errors: [error]});
  }
  getErrorType(type: ErrorType) {
    switch (type) {
      case ErrorType.Info:
        return 'success';
      case ErrorType.Warning:
        return 'warning';
      case ErrorType.Error:
        return 'error';
      case ErrorType.Validation:
        return 'error';
    }
  }
}
