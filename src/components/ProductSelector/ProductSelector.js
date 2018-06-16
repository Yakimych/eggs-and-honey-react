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

  activeChanged = (event: SyntheticInputEvent<EventTarget>, name: OrderType) => {
    let isChecked = event.target.checked;
    let activeProductName = (isChecked === true ? name: null);
    
    this.setState({ activeProductName: activeProductName });
    this.props.onActiveChanged(activeProductName);
  }

  render() {
    return (
      <div>
        {this.props.products.map((product, index) => (
          <label className={'btn btn-default ' + (this.productIsActive(product) ? 'active' : '')} key={index}>
            <input type="checkbox" checked={this.productIsActive(product)} onChange={(event) => this.activeChanged(event, product)} />
            {product}
          </label>
        ))}
      </div>
    );
  }
}

export default ProductSelector;
