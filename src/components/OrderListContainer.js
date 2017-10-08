import React from 'react';
import OrderList from './OrderList';
import AddOrder from './AddOrder';

class OrderListContainer extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Fetch orders from the service here
    this.state = {
      orders: props.orders,
      productTypes: [ "Eggs", "Honey" ]
    };
  }

  componentDidMount() {
    this.filterOrders(-1);
  }

  filterOrders = (productIndex) => {
    const selectedProductName = this.state.productTypes[productIndex];
    
    let filteredOrders =
      productIndex === -1 ?
      this.props.orders :
      this.props.orders.filter((order) =>
        order.order === selectedProductName);

    this.setState({ orders: filteredOrders });
  }

  render() {
    return (
     <div>
       <OrderList orders={this.state.orders} />
       <AddOrder
         onAddOrder={this.props.onAddOrder}
         products={this.state.productTypes}
         activeProductChanged={this.filterOrders}
       />
     </div>
    );
  }
}

export default OrderListContainer;
