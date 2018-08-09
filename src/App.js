import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Filters from './Filters';
import StrainList from './StrainList';
import './App.css';
import './bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      strainList: {},
    };
  }

  componentDidMount() {
    axios.get(`https://www.cannabisreports.com/api/v1.0/strains`)
      .then(response => this.setState({strainList: response.data.data}))
  }
//      .then(response => console.log(response.data.data))

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
