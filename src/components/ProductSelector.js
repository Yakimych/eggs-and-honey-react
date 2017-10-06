import React from 'react';

class ProductSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeProductIndex: -1 };
  }

  productIsActive = (index) => {
    return index === this.state.activeProductIndex;
  }
  
  getActiveProductClass = (index) => {
    return this.productIsActive(index) ? "active" : "";
  }

  activeChanged = (event, index) => {
    let isChecked = event.target.checked;
    if (isChecked === true) {
      this.setState({ activeProductIndex: index });
    } else {
      this.setState({ activeProductIndex: -1 });
    }
  }

  render() {
    return (
      <div>
        {this.props.products.map((product, index) => (
          <label className={"btn btn-default " + (this.productIsActive(index) ? "active" : "")} key={index}>
          <input type="checkbox" checked={this.productIsActive(index)} onChange={(event) => this.activeChanged(event, index)} />
            {product}
          </label>
        ))}
      </div>
    );
  }
}

export default ProductSelector;
