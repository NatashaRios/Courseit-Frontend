import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './styles.css';

function Navbar(){

  const { info } = useContext(ThemeContext);
  return(
    <nav className='navbar'>
    <h1 className='name-navbar'>{info.name}</h1>
    </nav>
  )
}

export default Navbar;