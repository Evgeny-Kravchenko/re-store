import React, { ComponentType, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import { IShoppingCart } from '../../interfaces';
import { connect } from 'react-redux';
import { compose } from 'redux';

interface IHeaderProps {
  numberItems: number;
  total: number;
}

const Header: ComponentType<IHeaderProps> = (props: IHeaderProps): ReactElement => {
  const { numberItems, total }: { numberItems: number; total: number } = props;
  return (
    <header className="header">
      <Link to="/" className="header__title text-dark">
        Re store
      </Link>
      <nav className="navigation header__navigation">
        <div className="navigation__item">
          <Link to="/">Home</Link>
        </div>
        <div className="navigation__item">
          <Link to="books-list">Books list</Link>
        </div>
      </nav>
      <Link to="orders-details" className="header__shopping-cart shopping-cart" href="#">
        <i className="shopping-cart__cart-icon fa fa-shopping-cart"></i>
        {numberItems} items ({total})
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart }: { shoppingCart: IShoppingCart }) => {
  return {
    total: shoppingCart.orderTotal,
    numberItems: shoppingCart.cartItems.length,
  };
};

export default compose(connect(mapStateToProps))(Header);
