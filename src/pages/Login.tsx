import React, { Component } from 'react';
import logo from '../assets/logo_cir.svg';
import '../styles/Login.css';

export class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          <p>
            MaskIt
          </p>
          <a
            className="Login-link"
            href="https://www.itsokayitsofficial.io"
            target="_blank"
          >
            Home
          </a>
        </header>
      </div>
    );
  }
}