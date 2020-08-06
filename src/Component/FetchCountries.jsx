import React, {useState} from 'react';
import './FetchCountries.css';
import FetchCountryProfile from './FetchCountryProfile';
import './Header.css';

const FetchCountries = ({countries}) => {
  const [viewOneCountry, setViewOneCountry] = useState ();

  const handleClick = event => {
    let countryId = event.target.id;
    let selectedcountry = countries.find (p => p.name === countryId);
    setViewOneCountry (selectedcountry);
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
      {countries.map (country => (
        <div>
          <img
            id={country.name}
            onClick={handleClick}
            className="flag"
            src={country.flag}
            alt="country flag"
          />

          <div className="Name">

            Name:{country.name}

          </div>
          <div className="population">
            Population:
            {country.population
              .toString ()
              .replace (/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
          <div className="region">Region:{country.region}</div>
          <div className="capital">Capital:{country.capital}</div>
        </div>
      ))}
    </div>
  );
};

export default FetchCountries;
