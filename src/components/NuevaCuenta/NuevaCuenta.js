import React, { Component } from 'react'
import './NuevaCuenta.css';

import { Link } from 'react-router-dom';

class NuevaCuenta extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="Nombre"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <Link to="/"><button>Crea Usuario</button></Link>
            <p className="message">Ya te habías registrado?<Link to="/">Regresa</Link></p>
          </form>
        </div>
      </div>
    )
  }
}

export default NuevaCuenta;