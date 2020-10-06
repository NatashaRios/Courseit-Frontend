import React from 'react';
import Item from '../Item';
import './styles.scss';

function Carrito({clickProduct}){
  return(
    <div className='carrito'>
      <h2 className='title-carrito'>Lista de productos en carrito</h2>
      {clickProduct.map((itemProduct, key) => {
        return(
          <Item itemProduct={itemProduct} key={key}/>
        )
      })}
    </div>
  )
}

export default Carrito;