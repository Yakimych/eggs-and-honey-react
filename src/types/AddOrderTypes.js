// @flow
type AddOrderProps = {
  products: Array<string>,
  onAddOrder: (name: string, product: string) => void,
  activeProductChanged: (name: string) => void
}

type AddOrderState = {
  name: string,
  product: string
}

export type { AddOrderProps, AddOrderState };
