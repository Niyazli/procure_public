import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

export interface SharedState {
  loading: boolean;
}

export function createInitialState(): SharedState {
  return {
    loading: false,
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'Shared'})
export class SharedStore extends Store<SharedState> {
  constructor() {
    super(createInitialState());
  }
}
