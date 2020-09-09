import { IAction, IBookList, IState } from '../interfaces';

const updateBookList = (state: IState | undefined, action: IAction): IBookList => {
  if (!state) {
    return {
      books: [],
      loading: true,
      error: null,
    };
  }
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS': {
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    }
    case 'FETCH_BOOKS_REQUESTED': {
      return {
        books: [],
        loading: true,
        error: null,
      };
    }
    case 'FETCH_BOOKS_FAILURE': {
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return { ...state.bookList };
    }
  }
};

export default updateBookList;
