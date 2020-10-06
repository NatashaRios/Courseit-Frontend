import React, { useContext } from 'react';
import AllContext from '../../contexts/AllContext';
import './styles.scss';

function ProductSmall({data}){
  const { handleClick } = useContext(AllContext);

  function handleProduct(){
    handleClick(data);
  }

  return(
    <div className='productSmall' onClick={handleProduct}>
      <img className='productSmall-img' src={data.img} alt={data.product}/>
    </div>
  )
}

/* function SmallBox({ data }) {
  const { addProduct } = useContext(ProductContext);
  const { name } = data;
  return <div onClick={() => addProduct(data)}>{name}</div>;
} */

export default ProductSmall;