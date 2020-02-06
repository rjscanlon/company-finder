import React from 'react';
import Skeleton from "react-loading-skeleton";
import PropTypes from 'prop-types';

import './CompanySummary.css';

const CompanySummary = ({company, setChosenCompany}) => {
  	return <div className="company-summary-block" onClick={()=>{setChosenCompany(company)}}>
		<h2 className="company-name">{company.Name || company.EntityName || <Skeleton/>}</h2>
		{
			company.Abn ? 
				<div className="secondary-details">
					<p className="company-abn">ABN: {company.Abn} </p>
					<p className="company-state">State: {company.State || company.AddressState}</p>
				</div> 
			:
				<Skeleton height={20} width="100%"/>
		}
		
	</div>
};

CompanySummary.propTypes = {
  company: PropTypes.object,
  setChosenCompany: PropTypes.func
}

export default CompanySummary;