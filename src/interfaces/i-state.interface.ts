import IBook from './book.interface';
import IShoppingCartItem from './shopping-cart-item.interface';

export interface IBookList {
  books: Array<IBook | undefined>;
  loading: boolean;
  error: null | Error;
}

export interface IShoppingCart {
  cartItems: Array<IShoppingCartItem | undefined>;
  orderTotal: number;
}

export interface IState {
  bookList: IBookList;
  shoppingCart: IShoppingCart;
}
