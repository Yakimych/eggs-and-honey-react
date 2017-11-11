import React from 'react';
import AdminOrderListContainer from './AdminOrderListContainer'
import OrderHistory from './OrderHistory'

const AdminPage = () => (
  <div>
    <h1>Admin View</h1>
    <AdminOrderListContainer />
    <OrderHistory />
  </div>
);

export default AdminPage;
