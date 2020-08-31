import { IBook } from '../interfaces';

export default interface IBookStoreService {
  getBooks: () => Array<IBook>;
}
