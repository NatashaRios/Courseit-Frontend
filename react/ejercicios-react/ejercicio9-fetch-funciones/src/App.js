import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [michi, setMichi] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(' https://api.thecatapi.com/v1/images/search');
      const dataJson = await data.json();

      setMichi(dataJson[0].url)
     
    }

     fetchData(); 
  })

  return (
    <React.Fragment>
      <img src={michi} />
    </React.Fragment>
  );
}

export default App;
