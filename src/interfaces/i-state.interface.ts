import IBook from './book.interface';

export default interface IState {
  books: Array<IBook | undefined>;
  loading: boolean;
  error: null | Error;
}
