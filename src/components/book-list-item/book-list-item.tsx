import React, { FC, ReactElement } from 'react';

import './book-list-item.scss';
import IBookListItemProps from '../../interfaces/book-list-item.interface';
import IBook from '../../interfaces/book.interface';

const BookListItem: FC<IBookListItemProps> = (props: IBookListItemProps): ReactElement => {
  const { book }: { book: IBook } = props;
  const { name, author }: { name: string; author: string } = book;
  return (
    <>
      <span>{name}</span>
      <br />
      <span>{author}</span>
    </>
  );
};
export default BookListItem;
