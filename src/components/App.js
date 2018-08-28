import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Filters from './Filters';
import StrainList from './StrainList';
import '../css/App.css';
import '../css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      strainList: {},
      isLoading: false
    };
    this.handleFilterSubmission = this.handleFilterSubmission.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});
    axios.get(`https://www.cannabisreports.com/api/v1.0/strains`)
      .then(response => this.setState({
        strainList: response.data.data,
        isLoading: false
      }))
  }
//      .then(response => console.log(response.data.data))

  handleFilterSubmission(searchQuery) {
    this.setState({isLoading: true});
    axios.get(`https://www.cannabisreports.com/api/v1.0/strains/search/${searchQuery}`)
      .then(response => this.setState({
        strainList: response.data.data,
        isLoading: false
      }))
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">

          <div className="main-content">

            <Filters onFilterSubmission={this.handleFilterSubmission}/>
            <StrainList
              strainList={this.state.strainList}
              isLoading={this.state.isLoading}
            />

          </div>

        </div>

      </div>
    );
  }
}

export default App;
