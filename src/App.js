import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import NuevaCuenta from './components/NuevaCuenta/NuevaCuenta';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <Login />
        )}/>

        <Route exact path="/dashboard" render={() => (
          <Dashboard />
        )} />

        <Route exact path="/nuevaCuenta" render={() => (
          <NuevaCuenta />
        )} />

      </div>
    );
  }
}

export default App;



