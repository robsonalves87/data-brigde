import { BehaviorSubject } from 'rxjs';

export default class StoreService {
  #store$ = new BehaviorSubject(0);

  constructor() {}

  set store(value) {
    this.#store$.next(value);
  }

  get store() {
    return this.#store$.asObservable();
  }

  incrementStore() {
    let store = this.#store$.value;
    store++;
    this.#store$.next(store);
  }
}
