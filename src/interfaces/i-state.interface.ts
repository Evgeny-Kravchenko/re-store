import IBook from './book.interface';
import IShoppingCartItem from './shopping-cart-item.interface';

export default interface IState {
  books: Array<IBook | undefined>;
  loading: boolean;
  error: null | Error;
  cartItems: Array<IShoppingCartItem | undefined>;
  orderTotal: number;
}
