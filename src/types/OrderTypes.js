// @flow
type OrderType = "Eggs" | "Honey";

type DisplayOrder = {
  id: number,
  name: string,
  order: OrderType,
  datePlaced?: string,
  dateResolved?: string,
}

type Order = {
  id: number,
  name: string,
  order: OrderType,
  datePlaced: Date
}

type ResolvedOrder = {
  id: number,
  name: string,
  order: OrderType,
  datePlaced: Date,
  dateResolved: Date
}

type ApiOrder = {
  id: number,
  name: string,
  order: string,
  datePlaced: string
}

type ApiResolvedOrder = {
  id: number,
  name: string,
  order: string,
  datePlaced: string,
  dateResolved: string
}

type OrderItems = {
  items: Array<ApiOrder>
}

type ResolvedOrderItems = {
  items: Array<ApiResolvedOrder>
}

type ResultWithId = {
  id: number
}

type ApiResult<T> = {
  data: T
}

export type { OrderType, Order, ResolvedOrder, DisplayOrder, OrderItems, ResolvedOrderItems, ApiOrder, ApiResolvedOrder, ApiResult, ResultWithId };
