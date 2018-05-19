// @flow
import type { OrderListContainerProps } from '../../types/OrderListContainerTypes';
import React from 'react';
import OrderListContainer from '../OrderListContainers/OrderListContainer';

class UserPage extends React.Component<OrderListContainerProps> {
  render() {
    return (
      <div>
        <h3>Orders</h3>
        <OrderListContainer {...this.props} />
      </div>
    );
  }
}

export default UserPage;
