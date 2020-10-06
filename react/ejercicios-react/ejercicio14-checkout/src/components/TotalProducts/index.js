import React, {useContext} from 'react';
import AllContext from '../../contexts/AllContext';
import './styles.scss';

function TotalProducts(){
  const { count } = useContext(AllContext);
  return(
    <div className='total-products'>
      <p>Total de productos:</p>
      <p>{count}</p>
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

export default TotalProducts;