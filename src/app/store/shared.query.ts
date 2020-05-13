import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {SharedStore, SharedState} from './shared.store';

@Injectable({providedIn: 'root'})
export class SharedQuery extends Query<SharedState> {
  constructor(protected store: SharedStore) {
    super(store);
  }
  isLoading() {
    return this.select(state => state.loading);
  }
}
