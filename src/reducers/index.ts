import { IState, IAction } from '../interfaces';

const initialState: IState = {
  books: [],
  loading: true,
  error: null,
};

const reducer = (state: IState = initialState, action: IAction): IState => {
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
      return state;
    }
  }
};

export default reducer;
