// @flow
import type { Order } from '../../types/OrderTypes';
import type { OrderListColumn } from '../../types/OrderListTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import ProductSelector from '../ProductSelector/ProductSelector';
import OrderService from '../../services/OrderService';

type AdminOrderListProps = {
  columns: Array<OrderListColumn>,
  orders: Array<Order>,
  onOrderResolved: (order: Order) => void
}

type AdminOrderListState = {
  filteredOrders: Array<Order>
}

class AdminOrderListContainer extends React.Component<AdminOrderListProps, AdminOrderListState> {
  orders = [];
  productTypes = [];

  constructor(props: AdminOrderListProps) {
    super(props);
    this.state = {
      filteredOrders: []
    };
  }

  componentDidMount() {
    this.getProductTypes();
  }

  componentWillReceiveProps(nextProps: AdminOrderListProps) {
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
      !selectedProductType ? this.orders : this.orders.filter((order) => order.order === selectedProductType);

    this.setState({ filteredOrders: filteredOrders });
  }

  resolveOrder = (orderId: number) => {
    OrderService.resolveOrder(orderId).then((order) => this.props.onOrderResolved(order));
  }

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
          orders={this.state.filteredOrders} />
      </div>
    );
  }
}

export default AdminOrderListContainer;
