import React, {useState} from 'react';
import './FetchCountries.css';
const FetchCountries = ({countries}) => {

  
  
  return (
    <div className='container'>
      {countries.map (
          country =>
         ( <div><img className="flag" src={country.flag} /> 
            <div className="Name">Name:{country.name}</div><div className='population'>Population:{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div><div className='region'>Region:{country.region}</div><div className='capital'>Capital:{country.capital}</div></div>
          ))
      }
    </div>
  );
};

export default FetchCountries;
