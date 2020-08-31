import React from 'react';
import BookstoreService from '../../services';

const bookstoreService: BookstoreService = new BookstoreService();

const {
  Provider: BookStoreServiceProvider,
  Consumer: BookStoreServiceConsumer,
} = React.createContext(bookstoreService);

export { BookStoreServiceProvider, BookStoreServiceConsumer };
