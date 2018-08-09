import React from 'react';
import PropTypes from 'prop-types';
import './StrainCard.css'

function StrainCard(props) {
    return (
      <div className="strain-card">
        <img src={props.image} alt={props.name} />
        <h5>{props.name}</h5>
        <p><em>{props.seedCompany}</em></p>
      </div>
    );
}

StrainCard.propTypes = {
  name: PropTypes.string.isRequired,
  seedCompany: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default StrainCard;
