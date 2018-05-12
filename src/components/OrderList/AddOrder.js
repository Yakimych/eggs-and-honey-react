// @flow
import type { AddOrderProps, AddOrderState } from '../../types/AddOrderTypes';
import React from 'react';
import ProductSelector from '../ProductSelector/ProductSelector';

class AddOrder extends React.Component<AddOrderProps, AddOrderState> {
  constructor(props: AddOrderProps) {
    super(props);
    this.state = { name: '', product: '' };
  }

  nameChanged = (event: SyntheticInputEvent<EventTarget>) => this.setState({ name: event.target.value });

  canAddOrder = () => !!this.state.name && !!this.state.product;
 
  activeProductChanged = (selectedProduct: string) => {
    this.setState({ product: selectedProduct });
    this.props.activeProductChanged(selectedProduct);
  }

  render() {
    const { name, product } = this.state;
    return (
      <div>
        <input type="text" onChange={this.nameChanged} />
        <button onClick={() => this.props.onAddOrder(name, product)} disabled={!this.canAddOrder()}>Add</button>
        <ProductSelector
          products={this.props.products}
          onActiveChanged={this.activeProductChanged} />
      </div>
    );
  }
}

export default AddOrder;
