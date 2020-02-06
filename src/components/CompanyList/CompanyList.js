import React from 'react';
import PropTypes from 'prop-types';

import CompanySummary from 'components/CompanySummary/CompanySummary'

const showPreviews = () => {
let cards = []
	// render 5 skeleton cards while loading data
	for (let i = 0; i < 6; i++) {
	  cards.push(<CompanySummary key={i} company={{}}/>)
	}
	return cards
}

const CompanyList = ({searchActive, companies, setChosenCompany, hasSearched}) => {
  	return <div>
  		{
  			(companies.length > 0) ?
			    companies.map(company => (
			      <CompanySummary key={company.Abn} company={company} setChosenCompany={setChosenCompany}/>
			    ))
			: searchActive ? showPreviews() : hasSearched ? "No results found, please try a different search." : ""
		}
	  </div>
};

CompanyList.propTypes = {
  searchActive: PropTypes.bool,
  companies: PropTypes.array,
  setChosenCompany: PropTypes.func,
  hasSearched: PropTypes.bool
}

export default CompanyList;