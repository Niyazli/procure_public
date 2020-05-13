export class ITableCfg {
  totalItems: number;
  pageSize: number;
  totalPages: number;

  constructor(data: any[], pageSize: number = 10) {
    this.totalItems = data?.length;
    this.pageSize = pageSize;
    this.totalPages = Math.floor(data?.length / pageSize);
  }
}
