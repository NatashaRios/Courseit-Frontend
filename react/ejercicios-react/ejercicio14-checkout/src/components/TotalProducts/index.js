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

export default TotalProducts;