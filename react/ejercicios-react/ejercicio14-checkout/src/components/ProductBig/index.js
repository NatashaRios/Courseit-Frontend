import React, {useContext} from 'react';
import AllContext from '../../contexts/AllContext';
import './styles.scss';

function ProductBig({data}){
  const { handleClick } = useContext(AllContext);

  function handleProduct(){
    handleClick(data);
  }

  return(
    <div className='productBig' onClick={handleProduct}>
      <img className='productBig-img' src={data.img} alt={data.product}/>
    </div>
  )
}

export default ProductBig;