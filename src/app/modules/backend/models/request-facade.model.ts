import { RequestModel } from './request.model';
import { RequestType } from '../enum/request-type.enum';

export class RequestFacadeModel<T> {
  requestType: RequestType;
  request: RequestModel<T>;
  constructor({requestType, request}: Partial<RequestFacadeModel<T>>) {
    this.requestType = requestType;
    this.request = request;
  }
}
