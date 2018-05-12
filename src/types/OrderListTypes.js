// @flow
import type { Order } from './OrderTypes';

type OrderListColumn = {
  name: string,
  label: string
}

type OrderListProps = {
  action: (id: number) => void,
  actionLabel: string,
  orders: Array<Order>,
  columns: Array<OrderListColumn>
}

export type { OrderListColumn, OrderListProps };
