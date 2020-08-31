import { IAction, IBook } from '../interfaces';

const booksLoaded = (newBooks: IBook): IAction => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
};

export { booksLoaded };
