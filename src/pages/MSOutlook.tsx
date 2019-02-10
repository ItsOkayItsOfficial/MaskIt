import React, { Component } from 'react';
import logo from '../assets/logo.svg'
import '../styles/MSOutlook.css';

export class MSOutlook extends Component {
  render() {
    return (
      <div className="Outlook">
        <header className="Outlook-header">
          <img src={logo} className="Outlook-logo" alt="logo" />
          <p>
            MaskIt
          </p>
          <a
            className="Outlook-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log In
          </a>
        </header>
      </div>
    );
  }
}
