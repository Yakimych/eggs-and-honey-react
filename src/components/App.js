import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';

import OrderService from '../services/OrderService';
import OrderListContainer from './OrderListContainer';

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
        <BrowserRouter>
          <div className="main-content">
            <Route path="/" exact component={(props) => (<OrderListContainer {...props} orders={this.state.orders} />)} />
            <Route path="/admin" component={(props) => (<h1><OrderListContainer {...props} orders={this.state.orders} /></h1>)} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;