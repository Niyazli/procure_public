import {Injectable, Optional} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {RequestModel} from '../models/request.model';
import {BackendConfig} from '../config/backend.config';
import {RequestFacadeModel} from '../models/request-facade.model';
import {catchError, map} from 'rxjs/operators';
import {RequestType} from '../enum/request-type.enum';
import {HttpResponseModel} from '../models/http-response.model';
import {ErrorType} from '../../widget/notification/model/error-type.enum';
import {ErrorHintService} from '../../widget/error-hint/services/error-hint.service';
import {ErrorModel} from '../../widget/notification/model/error.model';
import {NotificationService} from '../../widget/notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(
    @Optional() config: BackendConfig,
    private http: HttpClient,
    private errorHintService: ErrorHintService,
    private notificationService: NotificationService
  ) {
    this.apiUrl = config ? config.apiUrl : null;
  }
  private apiUrl: string;
  private proceedFullRequest<T>(request: Observable<HttpResponseModel<T>>, data: Pick<RequestModel, 'successMessage'>): Observable<T> {
    // @ts-ignore
    return request;
    // return request.pipe(
    //   map((response: HttpResponseModel<T>) => {
    //     if (data.successMessage) {
    //       this.notificationService.showSuccess(data.successMessage);
    //     }
    //     this.errorHintService.clearError.next(null);
    //     return response.data;
    //   }),
    //   catchError(this.handleError)
    // );
  }
  private handleError = (error: HttpErrorResponse) => {
    const {errors} = error.error as {errors: ErrorModel[]};
    if (errors) {
      this.errorHintService.clearError.next(null);
      this.notificationService.triggerVisibility.next({
        state: errors.every(e => e.errorType === ErrorType.Validation) ? 'hidden' : 'visible',
        errors: errors
          .filter(s => s.errorType !== ErrorType.Validation)
          .map(s => {
            return {...s, errorCode: s.value ? (s.value as string) : (s.errorCode as string)};
          }) as ErrorModel[],
      });
      const validationErrors = [ErrorType.Error, ErrorType.Validation];
      errors
        .filter(e => validationErrors.includes(e.errorType))
        .forEach(e =>
          this.errorHintService.validationError.next({
            control: e.param,
            error: e.value ? e.value : (e.errorCode as string),
          })
        );
    }
    return throwError(error);
  };
  private getSuccessMessage(request: RequestModel<any>): Pick<RequestModel, 'successMessage'> {
    return {successMessage: request.successMessage};
  }
  private getFullUrl(url: string): string {
    return this.apiUrl + '/' + url;
  }
  private get<T>(request: RequestModel): Observable<T> {
    return this.proceedFullRequest<T>(
      this.http.get<HttpResponseModel<T>>(this.getFullUrl(request.url), request.options),
      this.getSuccessMessage(request)
    );
  }
  private post<T, R>(request: RequestModel<R>): Observable<T> {
    return this.proceedFullRequest<T>(
      this.http.post<HttpResponseModel<T>>(this.getFullUrl(request.url), request.requestBody, request.options),
      this.getSuccessMessage(request)
    );
  }
  private put<T, R>(request: RequestModel<R>): Observable<T> {
    return this.proceedFullRequest<T>(
      this.http.put<HttpResponseModel<T>>(this.getFullUrl(request.url), request.requestBody, request.options),
      this.getSuccessMessage(request)
    );
  }
  private patch<T, R>(request: RequestModel<R>): Observable<T> {
    return this.proceedFullRequest<T>(
      this.http.patch<HttpResponseModel<T>>(this.getFullUrl(request.url), request.requestBody, request.options),
      this.getSuccessMessage(request)
    );
  }
  private delete<T>(request: RequestModel): Observable<T> {
    return this.proceedFullRequest<T>(
      this.http.delete<HttpResponseModel<T>>(this.getFullUrl(request.url), request.options),
      this.getSuccessMessage(request)
    );
  }
  send<T, R>(facade: RequestFacadeModel<R>): Observable<T> {
    console.log(facade);
    facade.request = this.setHeaders<R>(facade.request);
    switch (facade.requestType) {
      case RequestType.GET:
        return this.get<T>(facade.request as RequestModel<null>);
      case RequestType.POST:
        return this.post<T, R>(facade.request);
      case RequestType.PATCH:
        return this.patch<T, R>(facade.request);
      case RequestType.PUT:
        return this.put<T, R>(facade.request);
      case RequestType.DELETE:
        return this.delete<T>(facade.request as RequestModel<null>);
    }
  }
  private setHeaders<R>(request: RequestModel<R>) {
    // request.options?.headers
    //   ? request.options.headers.append('language', language.url)
    //   : ((request.options = new RequestOptionsModel()), request.options.headers = request.options.headers.append('language', language.url));
    return request;
  }
  setApiUrl(url: string): void {
    this.apiUrl = url;
  }

  buildQueryParams<TYPE>(object: TYPE): string {
    let url = '?';
    Object.keys(object).map((key: string, index: number) => {
      const value = object[key];
      if (index !== 0 && value) {
        url += '&';
      }
      if (value) {
        url += `${key}=${value}`;
      }
    });
    return url;
  }
}
