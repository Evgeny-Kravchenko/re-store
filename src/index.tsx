import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import BookStoreService from './services';
import ErrorBoundry from './components/error-boundry';
import { BookStoreServiceProvider } from './components/bookstore-service-context';

import store from './store';

import './styles/index.scss';

const bookStoreService = new BookStoreService();

const AppWithHot = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookStoreServiceProvider value={bookStoreService}>
        <Router>
          <AppWithHot />
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
