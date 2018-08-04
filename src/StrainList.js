import React, { Component } from 'react';
import StrainCard from './StrainCard';
import PropTypes from 'prop-types';
import './StrainList.css'

function StrainList(props) {

    return (
      <div className="strain-list">

        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>

        {Object.keys(props.strainList).map(function(strainId) {
          var strainCard = props.strainList[strainId];
          return <StrainCard
            name = {strainCard.name}
            type = {strainCard.type}
            rating = {strainCard.rating}
            key = {strainId}
          />;
        })}

      </div>
    );

}

StrainList.propTypes = {
  strainList: PropTypes.object.isRequired
};

export default StrainList;
