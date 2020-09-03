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

//Actions
import { booksLoaded } from '../../actions';

import './book-list.scss';

interface IBookLoaded {
  booksLoaded: (newBooks: Array<IBook>) => void;
}

class BookList extends Component<IState & IBookstoreServiceProp & IBookLoaded> {
  public componentDidMount(): void {
    const { bookStoreService } = this.props;
    if (bookStoreService) {
      const data = bookStoreService.getBooks();
      this.props.booksLoaded(data);
    }
  }

  public render(): ReactElement {
    const { books }: { books: Array<IBook | undefined> } = this.props;
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

const mapStateToProps = (state: IState) => ({ books: state.books });

const mapDispatchToProps = { booksLoaded };

export default compose<ComponentType>(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
