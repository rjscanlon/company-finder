import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from "react-loading-skeleton";

import './CompanyDetails.css';

const CompanyDetails = ({chosenCompany, setChosenCompany}) => {
  	return <div className="company-details-block">
  		{
        chosenCompany.Abn ? 
           <div>
            <button 
              className="back-button"
              onClick={()=>setChosenCompany({})}
            >
              {'< back'}
            </button>
            <h2>{chosenCompany.Name || chosenCompany.EntityName || <Skeleton/>}</h2> 
            <p>ABN: {chosenCompany.Abn}</p>
            {
              (chosenCompany.Name || chosenCompany.EntityName) ?
                <div>
                  <p>ABN Status: {chosenCompany.AbnStatus}</p>
                  {
                    (chosenCompany.Acn) ?
                      <p>ACN: {chosenCompany.Acn}</p>
                    : ""
                  }
                  <p>State: {chosenCompany.State || chosenCompany.AddressState}</p>
                  <p>Postcode: {chosenCompany.Postcode || chosenCompany.AddressPostcode}</p>
                  {
                    (chosenCompany.EntityTypeName) ?
                      <p>Entity Type: {chosenCompany.EntityTypeName}</p>
                    : ""
                  }
                </div>
              :
                <Skeleton count={5} />
            }
           </div>
        : 
        <Skeleton/>
       }
	  </div>
};

CompanyDetails.propTypes = {
  chosenCompany: PropTypes.object,
  setChosenCompany: PropTypes.func
}

export default CompanyDetails;
