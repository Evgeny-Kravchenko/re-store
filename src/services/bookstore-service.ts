import { IBookStoreService, IBook } from '../interfaces';

export default class BookstoreService implements IBookStoreService {
  getBooks(): Array<IBook> {
    return [
      { name: 'Big book CSS', id: 1 },
      { name: 'Decide algorithms', id: 2 },
      { name: `You don't know JS `, id: 3 },
    ];
  }
}
