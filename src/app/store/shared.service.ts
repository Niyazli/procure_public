import {Injectable} from '@angular/core';
import {SharedStore} from './shared.store';

@Injectable({providedIn: 'root'})
export class SharedService {
  constructor(private sharedStore: SharedStore) {}
  setLoading(state: boolean) {
    this.sharedStore.update({
      loading: state,
    });
  }
}
