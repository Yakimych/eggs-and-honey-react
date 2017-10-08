import React from 'react';
import ProductSelector from './ProductSelector';

class AddOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", selectedIndex: -1 };
  }

  nameChanged = (event) => {
    this.setState({ name: event.target.value });
  };
 
  getActiveProductName = () =>
    this.props.products[this.state.selectedIndex];

  addOrder = () => {
    this.props.onAddOrder(this.state.name, this.getActiveProductName());
  }
 
  activeProductChanged = (selectedIndex) => {
    this.setState({ selectedIndex: selectedIndex });
    this.props.activeProductChanged(selectedIndex);
  }
  
  canAddOrder = () => {
    // TODO: Don't allow the same order to be added twice
    return !!this.state.name && this.state.selectedIndex !== -1;
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
