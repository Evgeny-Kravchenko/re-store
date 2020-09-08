// Libraries
import React, { Component, ReactElement, ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

// High Order Components
import withBookStoreService from '../hoc';

// Interfaces
import IBook from '../../interfaces/book.interface';
import IState from '../../interfaces/i-state.interface';
import { IAction, IBookstoreServiceProp } from '../../interfaces';

// Components
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

//Actions
import { fetchBooks } from '../../actions';

import './book-list.scss';
import ErrorIndicator from '../error-indicator';

interface IFetchBooks {
  fetchBooks: () => void;
}

type Props = IState & IBookstoreServiceProp & IFetchBooks;

class BookList extends Component<Props & IFetchBooks> {
  public componentDidMount(): void {
    const { fetchBooks } = this.props;
    console.log(fetchBooks);
    fetchBooks();
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

const mapDispatchToProps = (
  dispatch: (action: IAction) => IAction,
  ownProps: IBookstoreServiceProp
) => {
  const { bookStoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookStoreService, dispatch),
  };
};

export default compose<ComponentType>(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
