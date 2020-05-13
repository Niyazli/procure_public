import { ErrorType } from './error-type.enum';
import { IError } from './error.interface';

export class ErrorModel implements IError {
  errorCode: number | string;
  errorType: ErrorType;
  param: string;
  value?: string;
  opened?: boolean;
  buildSuccess(message: string): void {
    this.errorCode = message;
    this.errorType = ErrorType.Info;
  }
}
