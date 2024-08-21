import { take } from 'rxjs';
import Store from './index';

describe('Store', () => {
  let store = new Store();

  it('insert and get the value in BehaviorSubject', () => {
    store.storeValue = 1;
    expect(store.storeValue.value).toBe(1);
  });

  it('insert and get the value with subscribe', async () => {
    store.storeValue = store.storeValue.value + 1;
    let result;

    await new Promise((resolve) => {
      subscription = store.storeValue.pipe(take(1)).subscribe((value) => {
        result = value;
        resolve(value);
      });
    });

    expect(result).toBe(2);
  });
});
