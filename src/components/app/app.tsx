import React, { ComponentType } from 'react';
import withBookStoreService from '../hoc';

import { IPropsApp } from '../../interfaces';

import './app.scss';

const App: ComponentType<IPropsApp> = (props: IPropsApp) => {
  const { bookStoreService } = props;
  return (
    <>
      {bookStoreService &&
        bookStoreService.getBooks().map((item) => <h1 key={item.id}>{item.name}</h1>)}
    </>
  );
};

export default withBookStoreService()(App);
