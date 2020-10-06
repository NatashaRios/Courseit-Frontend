import React from 'react';
import CarritoButton from '../CarritoButton';
import './styles.scss';

function Navbar(){
  return(
    <nav className='navbar'>
      <h1 className='navbar-title'>Carrito</h1>
      <CarritoButton />
    </nav>
  )
}

export default Navbar;