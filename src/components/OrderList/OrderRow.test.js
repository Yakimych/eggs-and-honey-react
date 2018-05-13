import React from 'react';
import ReactDOM from 'react-dom';
import OrderRow from './OrderRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // TODO: Is this still valid? According to flow, order is either Order or ResolvedOrder
  // name is not to be passed at all
  ReactDOM.render(<OrderRow name="TestName" order="TestOrder" />, div);
});
