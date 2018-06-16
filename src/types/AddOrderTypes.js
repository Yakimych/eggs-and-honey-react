// @flow
import type { OrderType } from './OrderTypes.js';

type AddOrderProps = {
  products: Array<OrderType>,
  onAddOrder: (name: string, product: OrderType) => void,
  activeProductChanged: (name: ?OrderType) => void
}

type AddOrderState = {
  name: string,
  product: ?OrderType
}

export type { AddOrderProps, AddOrderState };
