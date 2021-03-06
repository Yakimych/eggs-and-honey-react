// @flow
import type { OrderHistoryProps } from '../../types/OrderHistoryTypes';
import type { ResolvedOrder, DisplayOrder } from '../../types/OrderTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import OrderService from '../../services/OrderService';
import PropTypes from 'prop-types';

class OrderHistoryContainer extends React.Component<OrderHistoryProps> {
  unresolveOrder = (resolvedOrderId: number) => {
    OrderService
      .unresolveOrder(resolvedOrderId)
      .then((order) => this.props.onOrderUnresolved(order))
      .catch((error) => console.log(error));
  }

  toDisplayOrder = (order: ResolvedOrder): DisplayOrder =>
    ({
      id: order.id,
      name: order.name,
      productType: order.productType,
      datePlaced: order.datePlaced.toLocaleDateString('sv'),
      dateResolved: order.dateResolved.toLocaleDateString('sv')
    });

  render() {
    return <OrderList
      columns={this.props.columns}
      actionLabel={'Unresolve'}
      action={this.unresolveOrder}
      displayOrders={this.props.resolvedOrders.map(this.toDisplayOrder)} />;
  }
}

OrderHistoryContainer.propTypes = {
  columns: PropTypes.array.isRequired,
  resolvedOrders: PropTypes.array.isRequired,
  onOrderUnresolved: PropTypes.func.isRequired
};

export default OrderHistoryContainer;
