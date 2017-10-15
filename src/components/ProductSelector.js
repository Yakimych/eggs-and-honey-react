import React from 'react';

class ProductSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeProductName: "" };
  }

  productIsActive = (name) => name === this.state.activeProductName;
  
  getActiveProductClass = (index) => this.productIsActive(index) ? "active" : "";

  activeChanged = (event, name) => {
    let isChecked = event.target.checked;
    let activeProductName = (isChecked === true ? name: "");
    
    this.setState({ activeProductName: activeProductName });
    this.props.onActiveChanged(activeProductName);
  }

  render() {
    return (
      <div>
        {this.props.products.map((product, index) => (
          <label className={"btn btn-default " + (this.productIsActive(product) ? "active" : "")} key={index}>
          <input type="checkbox" checked={this.productIsActive(product)} onChange={(event) => this.activeChanged(event, product)} />
            {product}
          </label>
        ))}
      </div>
    );
  }
}

export default ProductSelector;
