import React from 'react';
import OrderList from './OrderList';
import AddOrder from './AddOrder';

let OrderListContainer = (props) => {
  return (
   <div>
     <OrderList orders={props.orders} />
     <AddOrder onAddOrder={props.onAddOrder} />
   </div>
  );
}

export default OrderListContainer;