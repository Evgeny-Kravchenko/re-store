export interface IBookStoreService {
  getBooks: () => Array<number>;
}
export declare class BookstoreService implements IBookStoreService {
  getBooks(): Array<number>;
}
