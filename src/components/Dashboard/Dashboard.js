import React, { Component } from 'react';
import './Dashboard.css';

import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>Esto es le Dash ir a la pantalla de <Link to="/">Login</Link></div>
    )
  }
}

export default Dashboard;