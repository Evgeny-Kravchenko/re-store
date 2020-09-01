import React, { ComponentType, ReactElement } from 'react';
import withBookStoreService from '../../hoc';

import BookList from '../../book-list';
import { IBookstoreServiceProp } from '../../../interfaces';
import IBook from '../../../interfaces/book.interface';

const BooksListPage: ComponentType<IBookstoreServiceProp> = (
  props: IBookstoreServiceProp
): ReactElement => {
  const { bookStoreService } = props;
  let books: Array<IBook> | Array<undefined> = [];
  if (bookStoreService) {
    books = bookStoreService.getBooks();
  }
  return <BookList books={books} />;
};

export default withBookStoreService()(BooksListPage);
