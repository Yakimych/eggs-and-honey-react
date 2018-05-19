// @flow
import type { Order } from './OrderTypes';
import type { OrderListColumn } from './OrderListTypes';

type AdminOrderListProps = {
  columns: Array<OrderListColumn>,
  orders: Array<Order>,
  onOrderResolved: (order: Order) => void
}

type AdminOrderListState = {
  filteredOrders: Array<Order>
}

export type { AdminOrderListProps, AdminOrderListState };
