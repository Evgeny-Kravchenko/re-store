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
      let newItem: IShoppingCartItem | undefined;
      if (book) {
        newItem = {
          id: book.id,
          title: book.name,
          total: book.price,
          count: 1,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
