import { IAction, IBook } from '../interfaces';

const booksLoaded = (newBooks: Array<IBook>): IAction => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
};

export { booksLoaded };
