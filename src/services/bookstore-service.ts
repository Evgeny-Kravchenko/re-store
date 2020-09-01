import { IBookStoreService, IBook } from '../interfaces';

export default class BookstoreService implements IBookStoreService {
  getBooks(): Array<IBook> {
    return [
      { name: 'Big book CSS', author: 'McFarland', id: 1 },
      { name: 'Decide algorithms', author: 'Адитья Бхаргава', id: 2 },
      { name: `You don't know JS `, author: 'Kyle Simpson', id: 3 },
    ];
  }
}
