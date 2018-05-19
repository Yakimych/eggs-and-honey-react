// TODO: https://stackoverflow.com/questions/35898251/whats-the-right-way-to-write-jest-tests-verified-with-flow
// flowtype install jest@22.x.x
import React from 'react';
import ReactDOM from 'react-dom';
import OrderList from './OrderList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const fakeOrders = [];
  ReactDOM.render(<OrderList orders={fakeOrders} action={() => {}} actionLabel={null} columns={[]} />, div);
});
