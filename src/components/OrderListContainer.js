import React from 'react';
import OrderList from './OrderList';
import AddOrder from './AddOrder';

let OrderListContainer = (props) => {
  return (
   <div>
     <OrderList orders={props.orders} />
     <AddOrder />
   </div>
  );
}

export default OrderListContainer;