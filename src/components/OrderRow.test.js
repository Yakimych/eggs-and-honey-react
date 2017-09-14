import React from 'react';
import ReactDOM from 'react-dom';
import OrderRow from './OrderRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrderRow name="TestName" order="TestOrder" />, div);
});
