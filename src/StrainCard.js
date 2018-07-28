import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StrainCard.css'

function StrainCard(props) {
    return (
      <div className="strain-card">
        <img src="http://via.placeholder.com/168x168" />
        <h3>{props.name}</h3>
        <p>{props.rating} stars</p>
        <p>{props.type} -- THC %</p>
      </div>
    );
}

StrainCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default StrainCard;
