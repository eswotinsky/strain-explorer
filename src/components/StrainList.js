import React from 'react';
import StrainCard from './StrainCard';
import Loading from './Loading';
import PropTypes from 'prop-types';
import '../css/StrainList.css';

function StrainList(props) {

    if (props.isLoading) {
      return (
        <div className="strain-list">
          <Loading />
        </div>
      )
    }

    return (
      <div className="strain-list">

        {Object.keys(props.strainList).map(function(strainId) {
          var strainCard = props.strainList[strainId];
          return <StrainCard
            name = {strainCard.name}
            seedCompany = {strainCard.seedCompany.name}
            image = {strainCard.image}
            ucpc = {strainCard.ucpc}
            key = {strainId}
          />;
        })}

      </div>
    );

}

StrainList.propTypes = {
  strainList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default StrainList;
