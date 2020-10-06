import React from 'react';
import TotalProducts from '../TotalProducts'
import TotalPrice from '../TotalPrice';
import './styles.scss';

function Total(){
  return(
    <div className='total'>
      <TotalProducts />
      <TotalPrice />
    </div>
  )
}

export default Total;