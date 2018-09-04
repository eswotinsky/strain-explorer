import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import '../css/App.css';
import '../css/bootstrap.min.css';

function App() {

    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Home />
        </div>
      </div>
    );
}

export default App;
