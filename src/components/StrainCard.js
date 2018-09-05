import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/StrainCard.css'

function StrainCard(props) {
    return (
      <div className="strain-card">
        <Link to={`/details/${props.ucpc}`}>
          <img src={props.image} alt={props.name} />
          <h5>{props.name}</h5>
        </Link>
        <p><em>{props.seedCompany}</em></p>
      </div>
    );
}

StrainCard.propTypes = {
  name: PropTypes.string.isRequired,
  seedCompany: PropTypes.string.isRequired,
  image: PropTypes.string,
  ucpc: PropTypes.string.isRequired
};

export default StrainCard;
