import React from 'react';
import './styles.scss';

function Item({itemProduct}){
  return(
    <div className='item'>
      <p>{itemProduct.product}</p>
      <p>${itemProduct.price}</p>
    </div>
  )
}

export default Item;