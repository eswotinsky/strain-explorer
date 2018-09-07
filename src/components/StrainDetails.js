import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import '../css/StrainDetails.css';

class StrainDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      strainData: {},
      isLoading: true
    }
  }

  componentDidMount() {
    axios.get(`https://www.cannabisreports.com/api/v1.0/strains/${this.props.match.params.ucpc}`)
      .then(response => this.setState({
        strainData: response.data.data,
        isLoading: false
      }))
  }

  render() {
    const strainData = this.state.strainData;

    if (this.state.isLoading) {
      return (
        <div className="strain-details">
          <Loading />
        </div>
      )
    }

    return (
      <div className="strain-details">
        <img src={strainData.image} />
        <div className="strain-details-text">
          <h1>{strainData.name}</h1>
          <h4>{strainData.seedCompany.name}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut suscipit libero, quis blandit ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus et molestie urna, sit amet pharetra dolor. Duis dui magna, hendrerit ac aliquam vitae, tristique sed purus. Vestibulum vehicula ultrices tempor. Suspendisse non arcu sagittis, commodo massa sit amet, condimentum nisl. In ornare efficitur tempor. Nunc molestie nibh sit amet iaculis luctus. Nunc aliquet ligula ac condimentum ornare. Mauris gravida quam ac bibendum rhoncus. Ut dignissim mauris ac commodo imperdiet. Nunc tortor sapien, suscipit et nibh sed, tempus mollis mauris. Donec suscipit fermentum purus.
          </p>
        </div>
      </div>
    );
  }
}

export default StrainDetails;
