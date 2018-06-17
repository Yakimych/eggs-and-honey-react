// @flow
import React from 'react';
import type { ProductType } from '../../types/OrderTypes';
import type { ProductSelectorProps, ProductSelectorState } from '../../types/ProductSelectorTypes';

class ProductSelector extends React.Component<ProductSelectorProps, ProductSelectorState> {
  constructor(props: ProductSelectorProps) {
    super(props);
    this.state = { activeProductType: null };
  }

  productTypeIsActive = (productType: ProductType) =>
    productType === this.state.activeProductType;

  productTypeClicked = (name: ProductType) => {
    this.setState(
      (prevState) => ({ activeProductType: prevState.activeProductType === name ? null : name }),
      () => this.props.onActiveChanged(this.state.activeProductType)
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
              className={`btn btn-${this.productTypeIsActive(product) ? 'success' : 'light'}`}
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
