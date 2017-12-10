import React from 'react';
import OrderRow from './OrderRow';

let OrderList = (props) => {
  return (
    <div>
      <div className='order-row'>
        <span>Name</span>
        <span>Order</span>
        {/* Add DatePlaced and DateResolved dynamically */}
      </div>
      {props.orders.map((order, index) => <OrderRow key={index} {...order} />)}
    </div>
  );
};

export default OrderList;
