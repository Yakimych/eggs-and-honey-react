// @flow
import type { OrderListColumn } from './OrderListTypes';
import type { Order } from './OrderTypes';

type OrderListContainerProps = {
  columns: Array<OrderListColumn>
}

type OrderListContainerState = {
  filteredOrders: Array<Order>
}

export type { OrderListContainerProps, OrderListContainerState };
