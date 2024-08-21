import { BehaviorSubject } from 'rxjs';

export default class Store {
  #store = new BehaviorSubject(0);

  constructor() {}

  set storeValue(value) {
    this.#store.next(value);
  }

  get storeValue() {
    return this.#store;
  }
}
