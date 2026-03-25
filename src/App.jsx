import React, { useState } from 'react';
import fetchJsonp from 'fetch-jsonp';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import SearchBar from './components/SearchBar/SearchBar';
import CompanyList from './components/CompanyList/CompanyList';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';

import './App.css';

const nameSearchURL = "https://abr.business.gov.au/json/MatchingNames.aspx";
const ABNSearchURL = "https://abr.business.gov.au/json/AbnDetails.aspx";
const GUID = "b6242120-5bce-4b10-9839-d3045a7682da";

function App() {

  const [hasSearched, setHasSearched] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [chosenCompany, setChosenCompany] = useState({});

  const performSearch = async (searchTerm) => {
    if(searchTerm.length > 2) {

      // if term is 11 digit number search by ABN
      if(searchTerm.match(/^[0-9]+$/) && searchTerm.length === 11) {
        
        setHasSearched(true);
        setSearchActive(true);
        setChosenCompany({Abn: searchTerm});

        const encodedAbn = encodeURIComponent(searchTerm);
        const encodedGuid = encodeURIComponent(GUID);

        fetchJsonp(`${ABNSearchURL}?abn=${encodedAbn}&guid=${encodedGuid}`, {
            timeout: 10000,
          })
          .then(response => response.json())
          .then(data => {
            if(data.Abn) {
              setChosenCompany(data);
            } else {
              setCompanies([]) ;
              setChosenCompany({});
            }
          })
          .catch(error => {
            console.error(error);
            setCompanies([]);
            setChosenCompany({});
          })
          .finally(() => {
            setSearchActive(false);
          });

       // otherwise search by name
       } else if(searchTerm.match(/[A-Za-z]/)) {
       
        setHasSearched(true);
        setSearchActive(true);
        setChosenCompany({});
        
        const encodedName = encodeURIComponent(searchTerm);
        const encodedGuid = encodeURIComponent(GUID);

        fetchJsonp(`${nameSearchURL}?name=${encodedName}&guid=${encodedGuid}`, {
            timeout: 10000,
          })
          .then(response => response.json())
          .then(data => {
            setCompanies(data.Names);
          })
          .catch(error => {
            console.error(error);
            setCompanies([]);
          })
          .finally(() => {
            setSearchActive(false);
          });

       } else {
         setSearchActive(false);
         setCompanies([]);
         setChosenCompany({});
       }

     } else {
       setHasSearched(false);
       setSearchActive(false);
       setCompanies([]);
       setChosenCompany({});
     }
  };

  const performSearchDebounced = AwesomeDebouncePromise(performSearch, 500);

  return (
    <div className="App">
      <div className="container">
          <SearchBar
            handleChange={(searchTerm)=>performSearchDebounced(searchTerm)}
          />
          {chosenCompany.Abn ? 
            <CompanyDetails chosenCompany={chosenCompany} setChosenCompany={setChosenCompany} />
            :
            <CompanyList 
              searchActive={searchActive} 
              companies={companies} 
              setChosenCompany={setChosenCompany}
              hasSearched={hasSearched}
            />
          }
      </div>
    </div>
  );
}

export default App;
