import { IAction, IBook } from '../interfaces';

const booksLoaded = (newBooks: Array<IBook>): IAction => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
};

const booksRequested = (): IAction => {
  return {
    type: 'BOOKS_REQUESTED',
  };
};

const booksError = (error: Error): IAction => {
  return {
    type: 'BOOKS_ERROR',
    payload: error,
  };
};

export { booksLoaded, booksRequested, booksError };
