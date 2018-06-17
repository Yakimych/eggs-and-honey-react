// @flow
import type { Order, DisplayOrder } from '../../types/OrderTypes';
import type { AdminOrderListProps, AdminOrderListState } from '../../types/AdminOrderListTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import ProductSelector from '../ProductSelector/ProductSelector';
import OrderService from '../../services/OrderService';

class AdminOrderListContainer extends React.Component<AdminOrderListProps, AdminOrderListState> {
  orders = [];
  productTypes = [];

  constructor(props: AdminOrderListProps) {
    super(props);
    this.state = {
      filteredOrders: []
    };
  }

  componentDidMount = () =>
    this.getProductTypes();

  componentWillReceiveProps = (nextProps: AdminOrderListProps) => {
    this.orders = nextProps.orders;
    this.updateFilteredOrders();
  }

  getProductTypes = () => {
    OrderService
      .getProductTypes()
      .then((productTypes) => this.productTypes = productTypes)
      .catch((error) => console.log(error));
  }
 
  updateFilteredOrders = (selectedProductType: ?string) => {
    let filteredOrders =
      !selectedProductType
        ? this.orders
        : this.orders.filter((order) => order.productType === selectedProductType);

    this.setState({ filteredOrders: filteredOrders });
  }

  resolveOrder = (orderId: number) => {
    OrderService.resolveOrder(orderId).then((order) => this.props.onOrderResolved(order));
  }

  toDisplayOrder = (order: Order): DisplayOrder =>
    ({
      id: order.id,
      name: order.name,
      productType: order.productType,
      datePlaced: order.datePlaced.toLocaleDateString('sv')
    });

  render() {
    return (
      <div>
        <ProductSelector
          products={this.productTypes}
          onActiveChanged={this.updateFilteredOrders} />
        <OrderList
          action={this.resolveOrder}
          actionLabel={'Resolve'}
          columns={this.props.columns}
          displayOrders={this.state.filteredOrders.map(this.toDisplayOrder)} />
      </div>
    );
  }
}

export default AdminOrderListContainer;
