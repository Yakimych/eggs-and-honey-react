import React from 'react';
import OrderRow from './OrderRow';

let OrderList = (props) => {
  return (
    <div>
      <div className='order-row'>
        {props.actionLabel && <span>{props.actionLabel}</span>}
        {props.columns.map((column, index) => <span key={index}>{column.label}</span>)}
      </div>
      {props.orders.map((order, index) =>
        <OrderRow
          key={index}
          actionLabel={props.actionLabel}
          action={() => props.action(order.id)}
          columnNames={props.columns.map((col) => col.name)}
          order={order} />)}
    </div>
  );
};

export default OrderList;
