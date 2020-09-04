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
import { booksLoaded, booksRequested } from '../../actions';

import './book-list.scss';

interface IBookLoaded {
  booksLoaded: (newBooks: Array<IBook>) => void;
}

interface IBookRequested {
  booksRequested: () => void;
}

type Props = IState & IBookstoreServiceProp & IBookLoaded & IBookRequested;

class BookList extends Component<Props> {
  public componentDidMount(): void {
    const { bookStoreService, booksLoaded, booksRequested } = this.props;
    if (bookStoreService) {
      booksRequested();
      bookStoreService.getBooks().then((data) => {
        booksLoaded(data);
      });
    }
  }

  public render(): ReactElement {
    const { books, loading }: { books: Array<IBook | undefined>; loading: boolean } = this.props;
    if (loading) {
      return <Spinner />;
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

const mapStateToProps = ({ books, loading }: { books: Array<IBook>; loading: boolean }) => ({
  books,
  loading,
});

const mapDispatchToProps = { booksLoaded, booksRequested };

export default compose<ComponentType>(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
