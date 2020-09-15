import React from 'react';
import './styles.scss';
import countrys from '../../data/countrys.json';
import { Link } from 'react-router-dom';

function Country(){
  
  return(
    <div className='wrapper-country'>
    
    {countrys.map((country, key) => {
      return(
            <Link to={`/carousel/${country.site}`}>
        <div key={key} className='content-country'>
            <img src={country.flag} className='flag-country'/>
            <p className='name-country'>{country.name}</p>
        </div>
            </Link>
      )
    })}
    </div>
  )
}

export default Country