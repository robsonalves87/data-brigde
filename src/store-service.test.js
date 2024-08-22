import { take } from 'rxjs';
import StoreService from './store-service';

describe('StoreService', () => {
  let storeService = new StoreService();

  it('insert and get the value with subscribe', async () => {
    storeService.store = 1;
    let result;

    await new Promise((resolve) => {
      subscription = storeService.store.pipe(take(1)).subscribe((value) => {
        result = value;
        resolve(value);
      });
    });

    expect(result).toBe(1);
  });

  it('increment', async () => {
    let result;
    storeService.incrementStore();

    await new Promise((resolve) => {
      subscription = storeService.store.pipe(take(1)).subscribe((value) => {
        result = value;
        resolve(value);
      });
    });

    expect(result).toBe(2);
  });
});
