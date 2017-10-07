import React from 'react';
import OrderList from './OrderList';
import AddOrder from './AddOrder';
import ProductSelector from './ProductSelector';

let OrderListContainer = (props) => {
  return (
   <div>
     <OrderList orders={props.orders} />
     <AddOrder onAddOrder={props.onAddOrder} products={["Eggs", "Honey"]} />
   </div>
  );
}

export default OrderListContainer;
