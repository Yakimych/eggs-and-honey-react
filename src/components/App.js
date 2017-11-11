import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import OrderListContainer from './OrderListContainer';
import AdminPage from './AdminPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Eggs and Honey</h2>
        </div>
        <BrowserRouter>
          <div className="main-content">
            <Route path="/" exact component={(props) => (<OrderListContainer {...props} />)} />
            <Route path="/admin" component={(props) => (<AdminPage {...props} />)} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
