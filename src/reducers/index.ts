import { IState, IAction } from '../interfaces';

import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state: IState | undefined, action: IAction): IState => {
  return {
    shoppingCart: updateShoppingCart(state, action),
    bookList: updateBookList(state, action),
  };
};

export default reducer;
