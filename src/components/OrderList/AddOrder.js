// @flow
import type { AddOrderProps, AddOrderState } from '../../types/AddOrderTypes';
import type { OrderType } from '../../types/OrderTypes';
import React from 'react';
import ProductSelector from '../ProductSelector/ProductSelector';

class AddOrder extends React.Component<AddOrderProps, AddOrderState> {
  constructor(props: AddOrderProps) {
    super(props);
    this.state = { name: '', product: null };
  }

  nameChanged = (event: SyntheticInputEvent<EventTarget>) => this.setState({ name: event.target.value });

  canAddOrder = () => !!this.state.name && !!this.state.product;
 
  activeProductChanged = (selectedProduct: ?OrderType) => {
    this.setState({ product: selectedProduct });
    this.props.activeProductChanged(selectedProduct);
  }

  render() {
    return (
      <div className="mt-3">
        <input type="text" className="mr-1" onChange={this.nameChanged} />
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.state.product != null
            ? this.props.onAddOrder(this.state.name, this.state.product)
            : null}
          disabled={!this.canAddOrder()}>
            Add
        </button>
        <ProductSelector
          products={this.props.products}
          onActiveChanged={this.activeProductChanged} />
      </div>
    );
  }
}

export default AddOrder;
