import React from 'react';
import OrderRow from './OrderRow';

let OrderList = (props) => {
  return (
    <ul>
      <li>
        <div>
          <span>Name</span>
          <span>Order</span>
        </div>
      </li>
      {props.orders.map((order, index) => <li key={index}><OrderRow {...order} /></li>)}
    </ul>
  );
}

export default OrderList;