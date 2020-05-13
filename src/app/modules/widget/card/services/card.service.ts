import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  organizationCardData: Subject<any> = new Subject<any>();

  constructor() {}

  setOrganizationCardData(data) {
    this.organizationCardData.next(data);
  }
}
