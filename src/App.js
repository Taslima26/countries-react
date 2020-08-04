import React from 'react';
 
import FetchCountries from './Component/FetchCountries.jsx'

import './App.css';

function App({countries}) {
  return (
    <div className="container">
      <FetchCountries countries={countries}/>
      
     
    </div>
  );
}

export default App;
