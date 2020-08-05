import React, {useState} from 'react';
// import { Link } from 'react-router-dom';

const FetchCountryProfile = ({country, goBack}) => {
  const goBackToAllCountries = () => {
    goBack();
  };
  return (
    // <Link to='/details'>

    <div className="country">
      <button onClick={goBackToAllCountries}>Go back!!</button>
      <div>
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="country-infos">
        <h2 className="country-name">{country.name}</h2>
        <p>
          <strong>Population: </strong>
          {country.population}
        </p>
        <p className="country-region">
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>

    //   </Link>)
  );
};

export default FetchCountryProfile;
