import React from 'react';
import Search from '../Search';
import { Link } from 'react-router-dom';
import './styles.scss';

function Navbar(){
  return(
    <nav className='navbar-content'>
      <h1 className='navbar-title'>STARTUP ARGENTINA</h1>
      <Search />

      <Link to='/Form'>
        <p className='navbar-link'>Agregar startup</p>
      </Link>
    </nav>
  )
}

export default Navbar;