import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import '../css/bootstrap.min.css';

function Header() {
  return (
    <div className="header">
      <h1><Link to="/">Strain Explorer</Link></h1>
      <small>Powered by Cannabis Reports API</small>
    </div>
  );
}

export default Header;
