import React, { Component } from 'react';
import StrainCard from './StrainCard';
import PropTypes from 'prop-types';
import './StrainList.css'

function StrainList(props) {

    return (
      <div className="strain-list">

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
