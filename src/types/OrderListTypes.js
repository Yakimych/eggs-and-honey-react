// @flow
type OrderListColumn = {
  name: string,
  label: string
}

type OrderListProps = {
  action: (id: number) => void,
  actionLabel: ?string,
  // TODO: This was a bit a JS Hack. Leaving as Object for now
  orders: Array<Object>,
  columns: Array<OrderListColumn>
}

export type { OrderListColumn, OrderListProps };
