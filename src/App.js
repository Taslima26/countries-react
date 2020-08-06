import React from 'react';

import './App.css';
import Search from './Component/Search';
import {useState} from 'react';
import CountryPicker from './Component/CountryPicker.jsx';
import RegionSelect from './Component/RegionSelect.jsx';
import Header from './Component/Header.jsx';

function App({countries}) {
  const [searchVal, setSearchVal] = useState('');
  const [select, setSelect] = useState([]);

  return (
    <div className="container">
      <Header />
      <Search searchVal={searchVal} setSearchVal={setSearchVal} />

      <RegionSelect
        select={select}
        setSelect={setSelect}
        countries={countries}
        searchVal={searchVal}
      />

      <CountryPicker countries={countries} searchVal={searchVal} />
    </div>
  );
}

export default App;
