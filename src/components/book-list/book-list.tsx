// Libraries
import React, { Component, ReactElement, ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

// High Order Components
import withBookStoreService from '../hoc';

// Interfaces
import IBook from '../../interfaces/book.interface';
import IState from '../../interfaces/i-state.interface';
import { IBookstoreServiceProp } from '../../interfaces';

// Components
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

//Actions
import { booksLoaded, booksRequested, booksError } from '../../actions';

import './book-list.scss';
import ErrorIndicator from '../error-indicator';

interface IBookLoaded {
  booksLoaded: (newBooks: Array<IBook>) => void;
}

interface IBookRequested {
  booksRequested: () => void;
}

interface IBookError {
  booksError: (err: Error) => void;
}

type Props = IState & IBookstoreServiceProp & IBookLoaded & IBookRequested & IBookError;

class BookList extends Component<Props> {
  public componentDidMount(): void {
    const { bookStoreService, booksLoaded, booksRequested, booksError } = this.props;
    if (bookStoreService) {
      booksRequested();
      bookStoreService
        .getBooks()
        .then((data) => {
          booksLoaded(data);
        })
        .catch((err: Error) => booksError(err));
    }
  }

  public render(): ReactElement {
    const {
      books,
      loading,
      error,
    }: { books: Array<IBook | undefined>; loading: boolean; error: null | Error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <ul className="book-list">
        {books.map((book: IBook | undefined) => {
          if (book) {
            return (
              <li key={book.id} className="book-list__item">
                <BookListItem book={book} />
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({
  books,
  loading,
  error,
}: {
  books: Array<IBook>;
  loading: boolean;
  error: null | Error;
}) => ({
  books,
  loading,
  error,
});

const mapDispatchToProps = { booksLoaded, booksRequested, booksError };

export default compose<ComponentType>(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
