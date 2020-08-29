export interface IBookStoreService {
  getBooks: () => Array<number>;
}

export class BookstoreService implements IBookStoreService {
  getBooks(): Array<number> {
    return [];
  }
}
