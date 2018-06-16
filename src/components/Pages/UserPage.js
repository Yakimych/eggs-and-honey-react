// @flow
import type { OrderListContainerProps } from '../../types/OrderListContainerTypes';
import React from 'react';
import OrderListContainer from '../OrderListContainers/OrderListContainer';

class UserPage extends React.Component<OrderListContainerProps> {
  render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow">
        <h3 className="border-bottom border-gray pb-2 mb-0">Orders</h3>
        <OrderListContainer {...this.props} />
      </div>
    );
  }
}

export default UserPage;
