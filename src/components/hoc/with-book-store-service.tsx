import React, { ReactNode, ComponentType } from 'react';

import { BookStoreServiceConsumer } from '../bookstore-service-context';
import { IBookStoreService } from '../../interfaces';

const withBookStoreService = () =>
  function <P>(Wrapped: ComponentType<P>): ComponentType<P> {
    const ComponentWithService: ComponentType<P> = (props: P) => {
      return (
        <BookStoreServiceConsumer>
          {(bookStoreService: IBookStoreService): ReactNode => {
            return <Wrapped {...props} bookStoreService={bookStoreService} />;
          }}
        </BookStoreServiceConsumer>
      );
    };
    return ComponentWithService;
  };

export default withBookStoreService;
