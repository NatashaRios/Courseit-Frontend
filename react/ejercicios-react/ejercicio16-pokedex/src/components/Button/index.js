import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.scss';

function Button({label, onClick}){
  const pathname = useLocation().pathname;
  return(
    <>
      {pathname == '/login' &&
        <button className='button-login' onClick={onClick}>{label}</button>
      }
      {pathname == '/' &&
        <button className='button-home' onClick={onClick}>{label}</button>
      }
    </>
  )
}

export default Button;