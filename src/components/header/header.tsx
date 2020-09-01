import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header: FC = (): ReactElement => (
  <header className="header">
    <Link to="/">Home</Link>
    <Link to="books-list">Books list</Link>
    <Link to="orders-details">Order details</Link>
  </header>
);

export default Header;
