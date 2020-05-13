import {Injectable, Optional} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { ErrorHintConfig } from '../config/error-hint.config';

@Injectable({
  providedIn: 'root'
})
export class ErrorHintService {
  public className: string;
  public hintClassName: string;
  public validationError: BehaviorSubject<{control: string, error: string}> = new BehaviorSubject<{control: string, error: string}>(null);
  public clearError: BehaviorSubject<null> = new BehaviorSubject<null>(null);
  constructor(@Optional() config: ErrorHintConfig) {
    this.className = config ? config.className : 'error-hint';
    this.hintClassName = config ? config.hintClassName : 'error-hint--label';
  }
}
