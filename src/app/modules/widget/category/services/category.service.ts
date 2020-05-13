import {Injectable} from '@angular/core';
import {BackendService} from '../../../backend/services/backend.service';
import {RequestModel} from '../../../backend/models/request.model';
import {RequestFacadeModel} from '../../../backend/models/request-facade.model';
import {RequestType} from '../../../backend/enum/request-type.enum';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private backendService: BackendService) {}

  getParent() {
    const requestFacade: RequestFacadeModel<any> = new RequestFacadeModel<any>({
      requestType: RequestType.GET,
      request: new RequestModel<any>({
        url: 'category/getParentCategories',
        successMessage: 'Valid',
      }),
    });
    return this.backendService.send(requestFacade);
  }
  getChild(id) {
    const requestFacade: RequestFacadeModel<any> = new RequestFacadeModel<any>({
      requestType: RequestType.GET,
      request: new RequestModel<any>({
        url: `category/getSubCategories/${id}`,
      }),
    });
    return this.backendService.send(requestFacade);
  }
  getInternalCategories() {
    const requestFacade: RequestFacadeModel<any> = new RequestFacadeModel<any>({
      requestType: RequestType.GET,
      request: new RequestModel<any>({
        url: 'internalCategory/GetCategories',
      }),
    });
    return this.backendService.send(requestFacade);
  }
  filterCategories(apiUrl: string, dto: {keyword: string; pageNumber: number; pageSize: number; active: boolean}) {
    const url = this.backendService.buildQueryParams<{keyword: string; pageNumber: number; pageSize: number}>(dto);
    const requestFacade: RequestFacadeModel<any> = new RequestFacadeModel<any>({
      requestType: RequestType.GET,
      request: new RequestModel<any>({
        url: apiUrl + url,
      }),
    });
    return this.backendService.send(requestFacade);
  }
}
