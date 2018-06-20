import React, { Component } from 'react';
import './Login.css';

import { Link } from "react-router-dom";

class Login extends Component {

  state = {
    email: '',
    password: '',
    emailValid: false,
    passwordValid: false,
    formValid: false
  }

  actualizaEmail() {

  }

  actualizaEmail = (email) => {
    this.setState({
      email: email.trim()
    })
  }

  actualizaPassword = (password) => {
    this.setState({
      password: password.trim()
    })
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            {this.state.email}
          
            <input 
               type="email"
               placeholder="Email"
               value={this.state.email}
               onChange={(event) => this.actualizaEmail(event.target.value)}
            />
            {this.state.password}
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(event) => this.actualizaPassword(event.target.value)}
            />
            <Link to="/dashboard"><button type="button">Login</button></Link>
            <p className="message">No te has registrado? <Link to="/nuevaCuenta">Crea una Neva Cuenta</Link></p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;