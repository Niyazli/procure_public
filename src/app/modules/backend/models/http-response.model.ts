export class HttpResponseModel<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}
