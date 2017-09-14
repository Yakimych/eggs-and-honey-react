import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import OrderService from './services/OrderService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: [] };
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => {
    OrderService.getOrders()
      .then(orders => this.setState({ orders: orders }))
      .catch(error => { });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Eggs and Honey</h2>
        </div>
        <div className="App-intro">
          <OrderList orders={this.state.orders} />
        </div>
      </div>
    );
  }
}

let OrderList = (props) => {
  return (
    <ul>
      <li>
        <div>
          <span>Name</span>
          <span>Order</span>
        </div>
      </li>
      {props.orders.map((order, index) => <li key={index}><OrderRow {...order} /></li>)}
    </ul>
  );
}

let OrderRow = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.order}</span>
    </div>
  );
}

export default App;