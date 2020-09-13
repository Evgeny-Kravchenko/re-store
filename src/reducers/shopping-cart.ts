import { IAction, IShoppingCart, IState } from '../interfaces';
import IBook from '../interfaces/book.interface';
import IShoppingCartItem from '../interfaces/shopping-cart-item.interface';

import updateCartItems from './cart-item';

const updateShoppingCart = (state: IState | undefined, action: IAction): IShoppingCart => {
  if (!state) {
    return {
      cartItems: [],
      orderTotal: 0,
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
      let orderTotal: number = state.shoppingCart.orderTotal;
      if (book) {
        orderTotal = Number((state?.shoppingCart.orderTotal + book?.price).toFixed(2));
      }
      return {
        ...state.shoppingCart,
        orderTotal,
        cartItems: updateCartItems(suchBookInCart, book, state.shoppingCart.cartItems),
      };
    }
    case 'BOOK_REMOVE_FROM_CART': {
      const id: number = action.payload;
      let { orderTotal }: { orderTotal: number } = state.shoppingCart;
      const newItems: Array<IShoppingCartItem | undefined> = state.shoppingCart.cartItems.filter(
        (book: IShoppingCartItem | undefined) => {
          if (book && book.id === id) {
            orderTotal = Number((orderTotal - book.total).toFixed(2));
          }
          return book?.id !== id;
        }
      );
      return {
        orderTotal,
        cartItems: newItems,
      };
    }
    case 'BOOK_DECREASE_FROM_CART': {
      const bookId = action.payload;
      let { orderTotal }: { orderTotal: number } = state.shoppingCart;
      const cartItems = state.shoppingCart.cartItems
        .map((item: IShoppingCartItem | undefined) => {
          if (item) {
            const { id, total, count } = item;
            if (id === bookId) {
              const resultTotal: number = total - total / count;
              item.total = Number(resultTotal.toFixed(2));
              item.count = count - 1;
              orderTotal -= total / count;
              orderTotal = Number(orderTotal.toFixed(2));
            }
          }
          return item;
        })
        .filter((item: IShoppingCartItem | undefined) => item?.count !== 0);
      return {
        orderTotal,
        cartItems,
      };
    }
    default: {
      return { ...state.shoppingCart };
    }
  }
};

export default updateShoppingCart;
