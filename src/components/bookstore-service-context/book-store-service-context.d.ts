import React from 'react';
import BookstoreService from '../../services';
declare const BookStoreServiceProvider: React.Provider<BookstoreService>,
  BookStoreServiceConsumer: React.Consumer<BookstoreService>;
export { BookStoreServiceProvider, BookStoreServiceConsumer };
