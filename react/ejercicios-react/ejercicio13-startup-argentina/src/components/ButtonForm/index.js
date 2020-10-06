import React from 'react';
import './styles.scss';

function ButtonForm({label, onClick}){
  return(
    <>
      <button className='buttonform-button' onClick={onClick}>{label}</button>
    </>
  )
}

export default ButtonForm;