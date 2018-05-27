// @flow
type DisplayOrder = {
  // TODO: maybe?
  id: number,
  name: string,
  // TODO: Enum?
  order: string,
  // TODO: Date
  datePlaced?: string,
  dateResolved?: string,
}

type Order = {
  id: number,
  name: string,
  // TODO: OrderType enum?
  order: string,
  // TODO: Date
  datePlaced: string
}

type ResolvedOrder = {
  id: number,
  name: string,
  order: string,
  // TODO: Date
  datePlaced: string,
  dateResolved: string
}

type OrderItems = {
  items: Array<Order>
}

type ResolvedOrderItems = {
  items: Array<ResolvedOrder>
}

type ResultWithId = {
  id: number
}

type ApiResult<T> = {
  data: T
}

export type { Order, ResolvedOrder, DisplayOrder, OrderItems, ResolvedOrderItems, ApiResult, ResultWithId };
