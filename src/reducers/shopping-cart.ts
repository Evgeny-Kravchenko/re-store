import { IAction, IShoppingCart, IState } from '../interfaces';
import IBook from '../interfaces/book.interface';
import IShoppingCartItem from '../interfaces/shopping-cart-item.interface';

import updateCartItems from './cart-item';

const updateShoppingCart = (state: IState | undefined, action: IAction): IShoppingCart => {
  if (!state) {
    return {
      cartItems: [],
      orderTotal: 500,
    };
  }
  switch (action.type) {
    case 'BOOK_ADDED_TO_CART': {
      const bookId = action.payload;
      const book: IBook | undefined = state.bookList.books.find((item: IBook | undefined) => {
        if (item && item.id === bookId) {
          return item;
        }
      });
      const suchBookInCart: IShoppingCartItem | undefined = state.shoppingCart.cartItems.find(
        (bookInCart: IShoppingCartItem | undefined) => {
          return bookInCart?.id === book?.id;
        }
      );
      return {
        ...state.shoppingCart,
        cartItems: updateCartItems(suchBookInCart, book, state.shoppingCart.cartItems),
      };
    }
    case 'BOOK_REMOVE_FROM_CART': {
      const id: number = action.payload;
      const newItems: Array<IShoppingCartItem | undefined> = state.shoppingCart.cartItems.filter(
        (book: IShoppingCartItem | undefined) => book?.id !== id
      );
      return {
        ...state.shoppingCart,
        cartItems: newItems,
      };
    }
    case 'BOOK_DECREASE_FROM_CART': {
      const bookId = action.payload;
      return {
        ...state.shoppingCart,
        cartItems: state.shoppingCart.cartItems
          .map((item: IShoppingCartItem | undefined) => {
            if (item) {
              const { id, total, count } = item;
              if (id === bookId) {
                item.total = total - total / count;
                item.count = count - 1;
              }
            }
            return item;
          })
          .filter((item: IShoppingCartItem | undefined) => item?.count !== 0),
      };
    }
    default: {
      return { ...state.shoppingCart };
    }
  }
};

export default updateShoppingCart;
