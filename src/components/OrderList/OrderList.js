// @flow
import type { DisplayOrder } from '../../types/OrderTypes';
import type { OrderListProps, OrderListColumn } from '../../types/OrderListTypes';
import React from 'react';
import OrderRow from './OrderRow';

let OrderList = (props: OrderListProps) => {
  return (
    <div>
      <div className='row'>
        {props.actionLabel && <h4 className="col">{props.actionLabel}</h4>}
        {props.columns.map((column: OrderListColumn, index: number) => <h6 className="col" key={index}>{column.label}</h6>)}
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
