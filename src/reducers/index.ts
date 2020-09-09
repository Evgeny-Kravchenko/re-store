import { IState, IAction } from '../interfaces';
import IBook from '../interfaces/book.interface';
import IShoppingCartItem from '../interfaces/shopping-cart-item.interface';

const initialState: IState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 500,
};

const updateCartItems = (
  existingBook: IShoppingCartItem | undefined,
  book: IBook | undefined,
  cartItems: Array<IShoppingCartItem | undefined>
): Array<IShoppingCartItem | undefined> => {
  if (book) {
    if (existingBook) {
      return cartItems.map((item: IShoppingCartItem | undefined) => {
        if (item && item.id === existingBook.id) {
          item.total = Number((item?.total + book.price).toFixed(2));
          item.count = item?.count + 1;
        }
        return item;
      });
    }
    const newItem: IShoppingCartItem = {
      id: book.id,
      title: book.name,
      total: book.price,
      count: 1,
    };
    return [...cartItems, newItem];
  }
  return [];
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS': {
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    }
    case 'FETCH_BOOKS_REQUESTED': {
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    }
    case 'FETCH_BOOKS_FAILURE': {
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    }
    case 'BOOK_ADDED_TO_CART': {
      const bookId = action.payload;
      const book: IBook | undefined = state.books.find((item: IBook | undefined) => {
        if (item && item.id === bookId) {
          return item;
        }
      });
      const suchBookInCart: IShoppingCartItem | undefined = state.cartItems.find(
        (bookInCart: IShoppingCartItem | undefined) => {
          return bookInCart?.id === book?.id;
        }
      );
      return {
        ...state,
        cartItems: updateCartItems(suchBookInCart, book, state.cartItems),
      };
    }
    case 'BOOK_REMOVE_FROM_CART': {
      const id: number = action.payload;
      const newItems: Array<IShoppingCartItem | undefined> = state.cartItems.filter(
        (book: IShoppingCartItem | undefined) => book?.id !== id
      );
      return {
        ...state,
        cartItems: newItems,
      };
    }
    case 'BOOK_DECREASE_FROM_CART': {
      const bookId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems
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
      return state;
    }
  }
};

export default reducer;
