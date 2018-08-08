import React, { Component } from 'react';
import Header from './Header';
import Filters from './Filters';
import StrainList from './StrainList';
import './App.css';
import './bootstrap.min.css';

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
          name: "strain4",
          type: "Sativa",
          rating: 6
        },
        strain5: {
          name: "strain5",
          type: "Sativa",
          rating: 6
        },
        strain6: {
          name: "strain6",
          type: "Sativa",
          rating: 6
        },
        strain7: {
          name: "strain7",
          type: "Sativa",
          rating: 6
        },
        strain8: {
          name: "strain8",
          type: "Sativa",
          rating: 6
        },
        strain9: {
          name: "strain9",
          type: "Sativa",
          rating: 6
        }
      },
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">


          <div className="main-content">

            <Filters />
            <StrainList
              strainList={this.state.strainList}
            />

          </div>

        </div>

      </div>
    );
  }
}

export default App;
