import React, {useState} from 'react';
import './FetchCountries.css';
const FetchCountries = ({countries}) => {
  console.log (countries);
  return (
    <div className='container'>
      {countries.map (
          country =>
         ( <div><img className="flag" src={country.flag} /> 
                  <div className="Name">{country.name}</div><div className='population'>{country.population}</div><div className='region'>{country.region}</div><div className='capital'>{country.capital}</div></div>
          ))
      }
    </div>
  );
};

export default FetchCountries;
