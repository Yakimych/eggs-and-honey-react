import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import OrderService from '../services/OrderService';
import OrderList from './OrderList';

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
      .catch(error => { console.log(error); });
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

export default App;