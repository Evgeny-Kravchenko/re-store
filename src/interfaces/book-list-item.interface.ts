import { IBook } from './index';

export default interface IBookListItemProps {
  book: IBook;
  onAddedToCart: () => void;
}
