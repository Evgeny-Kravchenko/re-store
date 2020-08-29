import { IState, IAction } from '../interfaces';

const initialState: IState = {
  books: [],
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case 'BOOKS_LOADED': {
      return {
        books: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
