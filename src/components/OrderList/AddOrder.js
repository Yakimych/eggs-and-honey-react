import React from 'react';
import ProductSelector from '../ProductSelector/ProductSelector';

class AddOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', product: '' };
  }

  nameChanged = (event) => this.setState({ name: event.target.value });

  canAddOrder = () => !!this.state.name && !!this.state.product;
 
  activeProductChanged = (selectedProduct) => {
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
