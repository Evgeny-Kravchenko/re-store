import React, { Component, ReactElement } from 'react';

import { IState } from '../../interfaces';
import IBook from '../../interfaces/book.interface';

import BookListItem from '../book-list-item';

import './book-list.scss';

export default class BookList extends Component<IState> {
  public render(): ReactElement {
    const { books }: { books: Array<IBook | undefined> } = this.props;
    return (
      <ul>
        {books.map((book: IBook | undefined) => {
          if (book) {
            return (
              <li key={book.id}>
                <BookListItem book={book} />
              </li>
            );
          }
        })}
      </ul>
    );
  }
}
