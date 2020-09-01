import { IBookStoreService, IBook } from '../interfaces';
export default class BookstoreService implements IBookStoreService {
  getBooks(): Array<IBook>;
}
