import React from 'react';
import Carrito from '../Carrito';
import Total from '../Total';
import './styles.scss';

function Toggle({clickButton, clickProduct}){
  
  return(
    <div className='toggle' id={clickButton}>
      <Carrito clickProduct={clickProduct}/>
      <Total />
    </div>
  )
}

export default Toggle;