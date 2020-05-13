import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BackendService} from '../../backend/services/backend.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  isCardType: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private backendService: BackendService,
  ) {}

  changeListType(value: boolean) {
    this.isCardType.next(value);
  }
}
