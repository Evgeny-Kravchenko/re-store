import { IState, IAction } from '../interfaces';

const initialState: IState = {
  books: [],
  loading: true,
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case 'BOOKS_LOADED': {
      return {
        books: action.payload,
        loading: false,
      };
    }
    case 'BOOKS_REQUESTED': {
      return {
        books: [],
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
