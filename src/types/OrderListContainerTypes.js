// @flow
import type { OrderListColumn } from './OrderListTypes';
import type { DisplayOrder } from './OrderTypes';

type OrderListContainerProps = {
  columns: Array<OrderListColumn>
}

type OrderListContainerState = {
  filteredOrders: Array<DisplayOrder>,
  productTypes: Array<string>
}

export type { OrderListContainerProps, OrderListContainerState };
