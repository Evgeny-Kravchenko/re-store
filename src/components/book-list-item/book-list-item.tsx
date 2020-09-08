import React, { FC, ReactElement } from 'react';

import './book-list-item.scss';
import IBookListItemProps from '../../interfaces/book-list-item.interface';
import IBook from '../../interfaces/book.interface';

const BookListItem: FC<IBookListItemProps> = (props: IBookListItemProps): ReactElement => {
  const { book, onAddedToCart }: { book: IBook; onAddedToCart: (id: number) => void } = props;
  const {
    name,
    author,
    price,
    coverImage,
  }: { name: string; author: string; price: number; coverImage: string } = book;
  return (
    <div className="book-list-item">
      <div className="book-list-item__cover">
        <img src={coverImage} alt={name} />
      </div>
      <div className="book-list-item__details">
        <span className="book-list-item__title">{name}</span>
        <div className="book-list-item__author">{author}</div>
        <div className="book-list-item__price">{price}$</div>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            onAddedToCart(book.id);
          }}
        >
          Add to card
        </button>
      </div>
    </div>
  );
};
export default BookListItem;
