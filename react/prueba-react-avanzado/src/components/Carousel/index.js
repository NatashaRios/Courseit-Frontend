import React from 'react';
import Product from '../Product';

function Carousel () {

    return(
      <div className='carousel'>
        <Product product='Producto 1' />
        <Product product='Producto 2' />
        <Product product='Producto 3' />
      </div>
    )
  
}

export default Carousel;