import React, { ComponentType, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

interface IHeaderProps {
  numberItems: number;
  total: number;
}

const Header: ComponentType<IHeaderProps> = (props: IHeaderProps): ReactElement => {
  const { numberItems, total }: { numberItems: number; total: number } = props;
  return (
    <header className="header">
      <a className="header__title text-dark">Re store</a>
      <nav className="navigation header__navigation">
        <div className="navigation__item">
          <Link to="/">Home</Link>
        </div>
        <div className="navigation__item">
          <Link to="books-list">Books list</Link>
        </div>
        <div className="navigation__item">
          <Link to="orders-details">Order details</Link>
        </div>
      </nav>
      <a className="header__shopping-cart shopping-cart" href="#">
        <i className="shopping-cart__cart-icon fa fa-shopping-cart"></i>
        {numberItems} items ({total})
      </a>
    </header>
  );
};

export default Header;
