import {RequestOptionsModel} from './request-options.model';
import {ID} from '../types/id.type';

export class RequestModel<T = null> {
  url: string;
  requestBody?: T;
  options?: RequestOptionsModel;
  successMessage?: string;
  constructor({url, requestBody, options, successMessage}: Partial<RequestModel<T>>) {
    this.url = url;
    this.requestBody = requestBody;
    this.options = options;
    this.successMessage = successMessage;
  }
  buildUrlWithID(id: ID) {
    this.url += `/${id}`;
  }
}
