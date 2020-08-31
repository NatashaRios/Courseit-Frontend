import React from 'react';

function Product(props){
  const { product } = props;
  return(
    <React.Fragment>
       <p>{product}</p>
    </React.Fragment>
  )
}

export default Product;