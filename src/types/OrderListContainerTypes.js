// @flow
import type { OrderListColumn } from './OrderListTypes';
import type { DisplayOrder, OrderType } from './OrderTypes';

type OrderListContainerProps = {
  columns: Array<OrderListColumn>
}

type OrderListContainerState = {
  filteredOrders: Array<DisplayOrder>,
  productTypes: Array<OrderType>
}

export type { OrderListContainerProps, OrderListContainerState };
