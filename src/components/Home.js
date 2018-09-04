import React, { Component } from 'react';
import Filters from './Filters';
import StrainList from './StrainList';
import axios from 'axios';

class Home extends Component {
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
      <div className="home">
        <Filters onFilterSubmission={this.handleFilterSubmission}/>
        <StrainList
          strainList={this.state.strainList}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default Home;
