import {ErrorType} from './error-type.enum';

export interface IError {
  errorCode: number | string;
  errorType: ErrorType;
  param: string;
  value?: string;
}
