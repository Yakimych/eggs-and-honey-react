import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
  
  onAddOrder = (name, order) => {
    OrderService.addOrder(name, order).then(() => {
      this.setState((prevState) => {
        let newOrders = prevState.orders.concat({ name: name, order: order}); 
        return { orders: newOrders };
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Eggs and Honey</h2>
        </div>
        <BrowserRouter>
          <div className="main-content">
            <Route path="/" exact component={(props) => (<OrderListContainer {...props} orders={this.state.orders} onAddOrder={this.onAddOrder} />)} />
            <Route path="/admin" component={(props) => (<h1><OrderListContainer {...props} orders={this.state.orders} /></h1>)} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;