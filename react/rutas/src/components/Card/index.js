import React from 'react';
import './styles.scss'

function Card(props){
  const {img, price, title} = props;

  return(
    <div className='wrapper-card'>
        <img className='img-card' src={img} />
        <p className='title-card'>{title}</p>
        <p className='price-card'>${price}</p>
    </div>
  )
}

export default Card;