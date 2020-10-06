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

/* function Amount() {
  const { products, totalPrice } = useContext(ProductContext);

  return (
    <ul>
      <li>Cantidad: {products.length}</li>
      <li>Precio total: {totalPrice}</li>
    </ul>
  );
} */

export default Total;