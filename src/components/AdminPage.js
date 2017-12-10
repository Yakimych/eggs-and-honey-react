import React from 'react';
import AdminOrderListContainer from './AdminOrderListContainer';
import OrderHistory from './OrderHistory';

let columns = [
  // TODO: Make name and order hardcoded in the list
  { name: 'name', label: 'Name' },
  { name: 'order', label: 'Order' },
  { name: 'datePlaced', label: 'Date Placed' }
];

let historyColumns = columns.concat([ { name: 'dateResolved', label: 'Date Resolved' } ]);

const AdminPage = () => (
  <div>
    <h1>Admin View</h1>
    <AdminOrderListContainer columns={columns} />
    <OrderHistory columns={historyColumns} />
  </div>
);

export default AdminPage;
