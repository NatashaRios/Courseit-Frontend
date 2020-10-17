import React from 'react';
import './styles.scss';

function ButtonLogin({label, onClick}){
  return(
    <>
      <button className='button-login' onClick={onClick}>{label}</button>
    </>
  )
}

export default ButtonLogin;