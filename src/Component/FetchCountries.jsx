import React, {useState} from 'react';
import './FetchCountries.css';
import FetchCountryProfile from './FetchCountryProfile';

const FetchCountries = ({countries}) => {
  const [clickCountry, setClickCountry] = useState('');
  const [viewOneCountry, setViewOneCountry] = useState();

  const handleClick = (event) => {
    let countryId = event.target.id;
    let selectedcountry = countries.find((p) => p.name === countryId);
    setViewOneCountry(selectedcountry);
  };

  if (viewOneCountry) {
    return (
      <FetchCountryProfile
        country={viewOneCountry}
        goBack={setViewOneCountry}
      />
    );
  }

  return (
    <div className="container">
      {countries.map((country) => (
        <div>
          <img className="flag" src={country.flag} alt="country flag" /> '
          <div className="Name">
            <button id={country.name} onClick={handleClick}>
              Name:{country.name}
            </button>
          </div>
          <div className="population">
            Population:
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
          <div className="region">Region:{country.region}</div>
          <div className="capital">Capital:{country.capital}</div>
        </div>
      ))}
      {/* {countries.map(item => (
        <FetchCountryProfile
          clickCountry={item}
          key={item.name}
          handleClick={handleClick}
           />
      ))} */}
    </div>
  );
};

export default FetchCountries;
