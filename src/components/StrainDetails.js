import React from 'react';
import PropTypes from 'prop-types';
import '../css/StrainDetails.css'

function StrainDetails(props) {
  
  return (
    <div className="strain-details">
      <h1>{props.match.params.ucpc}</h1>
    </div>
  );
}

export default StrainDetails;
