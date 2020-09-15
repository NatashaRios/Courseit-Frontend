import React, { useState } from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import './App.css';

function App() {
  const [searchParam, setSearchParam] = useState('');
  function handleSearch(searchParam){
    setSearchParam(searchParam);
  }
  return (
    <>
    <Navbar handleCallback={handleSearch}/>
    <List searchParam={searchParam}/>
    </>
  );
}

export default App;
