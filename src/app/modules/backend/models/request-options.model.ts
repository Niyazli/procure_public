import {HttpHeaders, HttpParams} from '@angular/common/http';

export class RequestOptionsModel {
  headers?: HttpHeaders;
  observe?: 'body';
  params?:
    | HttpParams
    | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  constructor() {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();
    this.responseType = 'json';
  }
}
