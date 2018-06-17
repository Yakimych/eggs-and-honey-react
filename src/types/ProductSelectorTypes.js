// @flow
import type { ProductType } from './OrderTypes';

type ProductSelectorProps = {
  products: Array<ProductType>,
  onActiveChanged: (activeProductName: ?ProductType) => void
}

type ProductSelectorState = {
  activeProductType: ?ProductType
}

export type { ProductSelectorProps, ProductSelectorState };