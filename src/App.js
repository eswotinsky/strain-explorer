import React, { Component } from 'react';
import Filters from './Filters';
import StrainList from './StrainList';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      strainList: {
        strain1: {
          name: "Strain 1",
          type: "Sativa",
          rating: 4
        },
        strain2: {
          name: "Strain 2",
          type: "Indica",
          rating: 5
        },
        strain3: {
          name: "Strain 3",
          type: "Indica",
          rating: 4
        },
        strain4: {
          name: "Jessica",
          type: "Sativa",
          rating: 6
        }
      },
    };
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Strain Lookup</h1>
        </header>

        <div>
          <Filters/>
        </div>

        <p className="App-intro">
          Cards go below.
        </p>

        <StrainList
          strainList={this.state.strainList}
        />

      </div>
    );
  }
}

export default App;
