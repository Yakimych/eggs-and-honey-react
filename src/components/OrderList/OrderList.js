// @flow
import type { DisplayOrder } from '../../types/OrderTypes';
import type { OrderListProps, OrderListColumn } from '../../types/OrderListTypes';
import React from 'react';
import OrderRow from './OrderRow';

let OrderList = (props: OrderListProps) => {
  return (
    <div>
      <div className='row'>
        {props.actionLabel && <span className="col">{props.actionLabel}</span>}
        {props.columns.map((column: OrderListColumn, index: number) => <span className="col" key={index}>{column.label}</span>)}
      </div>
      {props.displayOrders.map((order: DisplayOrder, index: number) =>
        <OrderRow
          key={index}
          actionLabel={props.actionLabel}
          action={() => props.action ? props.action(order.id): undefined}
          displayOrder={order} />)}
    </div>
  );
};

export default OrderList;
