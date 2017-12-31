import React from 'react';
import OrderListContainer from '../OrderListContainers/OrderListContainer';

class UserPage extends React.Component {
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
