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
 
  // TODO: Check for index -1
  getActiveProductName = () =>
    this.props.products[this.state.selectedIndex];

  addOrder = () => {
    this.props.onAddOrder(this.state.name, this.getActiveProductName());
  }
 
  activeProductChanged = (selectedIndex) => {
    this.setState({ selectedIndex: selectedIndex });
    // TODO: Call the parent components callback function
  }
  
  render() {
  return (
    <div>
      <input type="text" onChange={this.nameChanged} />
      <button onClick={this.addOrder}>Add</button>
      <ProductSelector
        products={this.props.products}
        onActiveChanged={this.activeProductChanged} />
    </div>
  );
  }
};

export default AddOrder;
