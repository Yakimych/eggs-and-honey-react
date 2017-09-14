import React from 'react';
import ReactDOM from 'react-dom';
import OrderList from './OrderList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const fakeOrders = [];
  ReactDOM.render(<OrderList orders={fakeOrders} />, div);
});
