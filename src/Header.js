import React, { Component } from 'react';
import './Header.css';
import './bootstrap.min.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Strain Explorer</h1>
        <small>Powered by Cannabis Reports API</small>
      </div>
    );
  }
}

export default Header;
