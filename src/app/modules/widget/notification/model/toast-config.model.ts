import {ToastType} from './toast-type.enum';

export class ToastConfig {
  type: ToastType;
  placement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
