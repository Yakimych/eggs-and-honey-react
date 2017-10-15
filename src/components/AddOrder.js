import React from 'react';
import ProductSelector from './ProductSelector';

class AddOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", product: "" };
  }

  nameChanged = (event) => {
    this.setState({ name: event.target.value });
  };
 
  addOrder = () => {
    this.props.onAddOrder(this.state.name, this.state.product);
  }
 
  activeProductChanged = (selectedProduct) => {
    this.setState({ product: selectedProduct });
    this.props.activeProductChanged(selectedProduct);
  }
  
  canAddOrder = () => {
    // TODO: Don't allow the same order to be added twice
    return !!this.state.name && !!this.state.product;
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.nameChanged} />
        <button onClick={this.addOrder} disabled={!this.canAddOrder()}>Add</button>
        <ProductSelector
          products={this.props.products}
          onActiveChanged={this.activeProductChanged} />
      </div>
    );
  }
};

export default AddOrder;
