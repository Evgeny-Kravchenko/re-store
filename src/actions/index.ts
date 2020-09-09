import { IAction, IBook } from '../interfaces';
import IBookStoreService from '../interfaces/bookstore-service.interface';

const booksLoaded = (newBooks: Array<IBook>): IAction => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksRequested = (): IAction => {
  return {
    type: 'FETCH_BOOKS_REQUESTED',
  };
};

const booksError = (error: Error): IAction => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

const bookAddedToCart = (bookId: number): IAction => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  };
};

const bookDeleteFromCart = (bookId: number): IAction => {
  return {
    type: 'BOOK_REMOVE_FROM_CART',
    payload: bookId,
  };
};

const bookDecreaseFromCart = (bookId: number): IAction => {
  return {
    type: 'BOOK_DECREASE_FROM_CART',
    payload: bookId,
  };
};

const fetchBooks = (
  bookStoreService: IBookStoreService | undefined,
  dispatch: (action: IAction) => IAction
) => (): void => {
  dispatch(booksRequested());
  if (bookStoreService) {
    bookStoreService
      .getBooks()
      .then((data: Array<IBook>) => dispatch(booksLoaded(data)))
      .catch((error: Error) => booksError(error));
  }
};

export {
  booksLoaded,
  booksRequested,
  booksError,
  fetchBooks,
  bookAddedToCart,
  bookDeleteFromCart,
  bookDecreaseFromCart,
};
