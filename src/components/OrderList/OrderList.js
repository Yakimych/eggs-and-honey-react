// @flow
import type { DisplayOrder } from '../../types/OrderTypes';
import type { OrderListProps, OrderListColumn } from '../../types/OrderListTypes';
import React from 'react';
import OrderRow from './OrderRow';

let OrderList = (props: OrderListProps) => {
  return (
    <div>
      <div className='order-row'>
        {props.actionLabel && <span>{props.actionLabel}</span>}
        {props.columns.map((column: OrderListColumn, index: number) => <span key={index}>{column.label}</span>)}
      </div>
      {props.displayOrders.map((order: DisplayOrder, index: number) =>
        <OrderRow
          key={index}
          actionLabel={props.actionLabel}
          action={() => props.action(order.id)}
          displayOrder={order} />)}
    </div>
  );
};

export default OrderList;
