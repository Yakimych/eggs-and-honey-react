// @flow
import React from 'react';

type ProductSelectorProps = {
  products: Array<string>,
  onActiveChanged: (activeProductName: string) => void
}

type ProductSelectorState = {
  activeProductName: string
}

class ProductSelector extends React.Component<ProductSelectorProps, ProductSelectorState> {
  constructor(props: ProductSelectorProps) {
    super(props);
    this.state = { activeProductName: '' };
  }

  productIsActive = (name: string) => name === this.state.activeProductName;
  
  // TODO: Check why it's called index. Looks like it should be name
  // TODO: Can this be removed?
  getActiveProductClass = (index: string) => this.productIsActive(index) ? 'active' : '';

  activeChanged = (event: SyntheticInputEvent<EventTarget>, name: string) => {
    let isChecked = event.target.checked;
    let activeProductName = (isChecked === true ? name: '');
    
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
