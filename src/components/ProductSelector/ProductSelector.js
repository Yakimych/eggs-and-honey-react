// @flow
import React from 'react';
import type { OrderType } from '../../types/OrderTypes';

type ProductSelectorProps = {
  products: Array<OrderType>,
  onActiveChanged: (activeProductName: ?OrderType) => void
}

type ProductSelectorState = {
  activeProductName: ?OrderType
}

class ProductSelector extends React.Component<ProductSelectorProps, ProductSelectorState> {
  constructor(props: ProductSelectorProps) {
    super(props);
    this.state = { activeProductName: null };
  }

  productIsActive = (name: OrderType) => name === this.state.activeProductName;

  productTypeClicked = (name: OrderType) => {
    this.setState((prevState) => ({ activeProductName: prevState.activeProductName === name ? null : name }),
      () => this.props.onActiveChanged(this.state.activeProductName)
    );
  }

  render() {
    return (
      <div>
        {this.props.products.map((product, index) => (
          <label className={(this.productIsActive(product) ? 'customactive' : '')} key={index}>
            <button type="button" checked={this.productIsActive(product)} onClick={() => this.productTypeClicked(product)} />
            {product}
          </label>
        ))}
      </div>
    );
  }
}

export default ProductSelector;
