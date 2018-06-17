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
        <div className="btn-group">
          {this.props.products.map((product, index) => (
            <button
              key={index}
              type="button"
              className={`btn btn-${this.productIsActive(product) ? 'success' : 'light'}`}
              onClick={() => this.productTypeClicked(product)}
            >
              {product}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductSelector;
