import React, { ComponentType, ReactElement } from 'react';

import './shopping-cart-table.scss';

const ShoppingCartTable: ComponentType = (): ReactElement => {
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
          <tr>
            <td scope="col">1</td>
            <td scope="col">You don&apos;t know CSS</td>
            <td scope="col">2</td>
            <td scope="col">400$</td>
            <td scope="col">
              <button className="btn btn-outline-danger">
                <i className="fa fa-trash-o"></i>
              </button>
              <button className="btn btn-outline-success">
                <i className="fa fa-plus-circle"></i>
              </button>
              <button className="btn btn-outline-warning">
                <i className="fa fa-minus-circle"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td scope="col">1</td>
            <td scope="col">You don&apos;t know CSS</td>
            <td scope="col">2</td>
            <td scope="col">400$</td>
            <td scope="col">
              <button className="btn btn-outline-danger">
                <i className="fa fa-trash-o"></i>
              </button>
              <button className="btn btn-outline-success">
                <i className="fa fa-plus-circle"></i>
              </button>
              <button className="btn btn-outline-warning">
                <i className="fa fa-minus-circle"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td scope="col">1</td>
            <td scope="col">You don&apos;t know CSS</td>
            <td scope="col">2</td>
            <td scope="col">400$</td>
            <td scope="col">
              <button className="btn btn-outline-danger">
                <i className="fa fa-trash-o"></i>
              </button>
              <button className="btn btn-outline-success">
                <i className="fa fa-plus-circle"></i>
              </button>
              <button className="btn btn-outline-warning">
                <i className="fa fa-minus-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">Total: 201$</div>
    </>
  );
};

export default ShoppingCartTable;
