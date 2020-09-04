import { IState, IAction } from '../interfaces';

const initialState: IState = {
  books: [],
  loading: true,
  error: null,
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case 'BOOKS_LOADED': {
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    }
    case 'BOOKS_REQUESTED': {
      return {
        books: [],
        loading: true,
        error: null,
      };
    }
    case 'BOOKS_ERROR': {
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
