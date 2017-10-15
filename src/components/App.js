import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import OrderListContainer from './OrderListContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Eggs and Honey</h2>
        </div>
        <BrowserRouter>
          <div className="main-content">
            <Route path="/" exact component={(props) => (<OrderListContainer {...props} />)} />
            <Route path="/admin" component={(props) => (<h1><OrderListContainer {...props} /></h1>)} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
