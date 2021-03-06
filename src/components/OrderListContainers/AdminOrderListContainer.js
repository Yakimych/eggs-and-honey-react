// @flow
import type { ProductType, Order, DisplayOrder } from '../../types/OrderTypes';
import type { AdminOrderListProps, AdminOrderListState } from '../../types/AdminOrderListTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import ProductSelector from '../ProductSelector/ProductSelector';
import OrderService from '../../services/OrderService';
import PropTypes from 'prop-types';

class AdminOrderListContainer extends React.Component<AdminOrderListProps, AdminOrderListState> {
  orders = [];
  productTypes = [];

  constructor(props: AdminOrderListProps) {
    super(props);
    this.state = {
      filteredOrders: [],
      selectedProductType: null
    };
  }

  componentDidMount = () =>
    this.getProductTypes();

  componentWillReceiveProps = (nextProps: AdminOrderListProps) => {
    this.orders = nextProps.orders;
    this.updateFilteredOrders(this.state.selectedProductType);
  }

  getProductTypes = () => {
    OrderService
      .getProductTypes()
      .then((productTypes) => this.productTypes = productTypes)
      .catch((error) => console.log(error));
  }
 
  updateFilteredOrders = (selectedProductType: ?ProductType) => {
    this.setState({ selectedProductType });

    let filteredOrders =
      !selectedProductType
        ? this.orders
        : this.orders.filter((order) => order.productType === selectedProductType);
    this.setState({ filteredOrders });
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
          activeProductType={this.state.selectedProductType}
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

AdminOrderListContainer.propTypes = {
  columns: PropTypes.array.isRequired,
  orders: PropTypes.array.isRequired,
  onOrderResolved: PropTypes.func.isRequired
};

export default AdminOrderListContainer;
