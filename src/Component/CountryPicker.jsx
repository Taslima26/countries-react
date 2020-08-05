import React, {useState} from 'react';
import FetchCountries from './FetchCountries';
import RegionSelect from './RegionSelect';
const CountryPicker = ({searchVal, countries}) => {
  console.log('countries', countries);
  const filteredCountries = countries.filter((entry) =>
    entry.capital && entry.name
      ? entry.name.toLowerCase().includes(searchVal) ||
        entry.capital.toLowerCase().includes(searchVal)
      : ''
  );
  console.log(filteredCountries);
  return (
    <div>
      <FetchCountries countries={filteredCountries} />
    </div>
  );
};

export default CountryPicker;
