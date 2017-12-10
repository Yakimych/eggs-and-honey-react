import React from 'react';
import OrderRow from './OrderRow';

let OrderList = (props) => {
  return (
    <div>
      <div className='order-row'>
        {props.columns.map((column, index) => <span key={index}>{column.label}</span>)}
      </div>
      {props.orders.map((order, index) => <OrderRow key={index} columnNames={props.columns.map((col) => col.name)} {...order} />)}
    </div>
  );
};

export default OrderList;
