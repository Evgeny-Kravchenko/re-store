import { IBook } from '../interfaces';

export default interface IBookStoreService {
  getBooks: () => Promise<Array<IBook>>;
}
