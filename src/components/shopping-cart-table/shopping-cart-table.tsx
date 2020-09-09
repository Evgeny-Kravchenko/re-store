import React, { ComponentType, ReactElement } from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.scss';
import { IShoppingCartItem, IPropsShoppingCartTable } from '../../interfaces';

import { bookDeleteFromCart, bookDecreaseFromCart, bookAddedToCart } from '../../actions';

const ShoppingCartTable: ComponentType<IPropsShoppingCartTable> = (
  props: IPropsShoppingCartTable
): ReactElement => {
  const { items, total, onIncrease, onDecrease, onDelete } = props;
  const renderRow = (item: IShoppingCartItem, idx: number) => {
    const {
      id,
      title,
      count,
      total,
    }: { id: number; title: string; count: number; total: number } = item;
    return (
      <tr key={id}>
        <td scope="col">{idx + 1}</td>
        <td scope="col">{title}</td>
        <td scope="col">{count}</td>
        <td scope="col">{total}</td>
        <td scope="col">
          <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o"></i>
          </button>
          <button className="btn btn-outline-success" onClick={() => onIncrease(id)}>
            <i className="fa fa-plus-circle"></i>
          </button>
          <button className="btn btn-outline-warning" onClick={() => onDecrease(id)}>
            <i className="fa fa-minus-circle"></i>
          </button>
        </td>
      </tr>
    );
  };
  return (
    <>
      <table className="table table-hover shopping-cart-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: IShoppingCartItem, idx: number) => {
            return renderRow(item, idx);
          })}
        </tbody>
      </table>
      <div className="total">{total}</div>
    </>
  );
};

const mapStateToProps = ({
  cartItems,
  orderTotal,
}: {
  cartItems: Array<IShoppingCartItem>;
  orderTotal: number;
}) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookDecreaseFromCart,
  onDelete: bookDeleteFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
