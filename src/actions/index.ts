import { IState, IAction } from '../interfaces';

const booksLoaded = (newBooks: IState): IAction => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
};

export { booksLoaded };
