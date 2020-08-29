import React, { ComponentClass, ReactNode } from 'react';

import { BookStoreServiceConsumer } from '../bookstore-service-context';
import { BookstoreService } from '../../services';

const withBookStoreService = () => (Wrapped: ComponentClass) => {
  const ComponentWithService = <T extends unknown>(props: T) => {
    return (
      <BookStoreServiceConsumer>
        {(bookStoreService: BookstoreService): ReactNode => {
          return <Wrapped {...props} bookStoreService={bookStoreService} />;
        }}
      </BookStoreServiceConsumer>
    );
  };
  return ComponentWithService;
};

export default withBookStoreService;
