import React, { ComponentType } from 'react';
import { Route, Switch } from 'react-router-dom';

import { IBookstoreServiceProp } from '../../interfaces';

import BooksListPage from '../pages/books-list';
import OrdersDetailsPage from '../pages/orders-details';
import Header from '../header';

import './app.scss';

const App: ComponentType<IBookstoreServiceProp> = () => {
  return (
    <div className="app">
      <Header numberItems={5} total={210} />
      <main role="main" className="wrapper">
        <Switch>
          <Route
            path="/"
            render={() => <h1 className="text-center p-3">Welcome to the our bookstore</h1>}
            exact
          />
          <Route path="/books-list/" component={BooksListPage} exact />
          <Route path="/orders-details/" component={OrdersDetailsPage} exact />
        </Switch>
      </main>
    </div>
  );
};

export default App;
