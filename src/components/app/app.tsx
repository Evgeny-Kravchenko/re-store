import React, { FC } from 'react';
import { BookstoreService } from '../../services';

import './app.scss';

import ErrorBoundry from '../error-boundry';
import { BookStoreServiceProvider } from '../bookstore-service-context';

const App: FC = () => {
  const bookstoreService: BookstoreService = new BookstoreService();
  return (
    <BookStoreServiceProvider value={bookstoreService}>
      <ErrorBoundry>
        <h1>Hello World</h1>
      </ErrorBoundry>
    </BookStoreServiceProvider>
  );
};

export default App;
