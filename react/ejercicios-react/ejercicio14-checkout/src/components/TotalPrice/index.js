import React, { useContext } from 'react';
import AllContext from '../../contexts/AllContext';
import './styles.scss';

function TotalPrice(){
  const { price } = useContext(AllContext);
  const total = price.reduce((a,b) => {
    return a + b;
  }, 0)
  
  return(
    <div className='total-price'>
      <p>Precio total: </p>
      <p>${total}</p>
    </div>
  )
}

export default TotalPrice;