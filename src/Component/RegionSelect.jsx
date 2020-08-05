import React, {useState} from 'react';
import './RegionSelect.css';
import Select from 'react-select';
import FetchCountries from './FetchCountries';
import CountryPicker from './CountryPicker';

const RegionSelect = ({select, setSelect, countries, searchVal}) => {
  console.log('select value in region select', select);
  console.log('setselect value in region select ', setSelect);

  const HandleChange = (event) => {
    const selectedCountry = event.target.value;
    let selectedCountries = countries.filter(
      (country) => country.region === selectedCountry
    ); // ||
    //     (searchVal
    //       ? country.name.toLowerCase().includes(searchVal.toLowerCase()) ||
    //         country.capital.toLowerCase().includes(searchVal.toLowerCase())
    //       : null)
    // ));
    console.log(selectedCountries);
    setSelect(selectedCountries);
    selectedCountries = '';
  };
  console.log(select);
  return (
    <div>
      <select className="selectbox" onChange={(event) => HandleChange(event)}>
        {countries.map((entry) => (
          <option value={entry.region}>{entry.region}</option>
        ))}
      </select>
      <div>
        { <FetchCountries countries={select} /> }
      </div>
    </div>
  );
};

export default RegionSelect;
