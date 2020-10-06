import React from 'react';
import ProductBig from '../ProductBig';
import ProductSmall from '../ProductSmall';
import productsjson from '../../data/productsjson.json';
import './styles.scss';

function Products(){
  const [first, second, third] = productsjson;
  return(
    <div className='products'>
      <ProductBig data={first}/>
      <div className='products-small'>
        <ProductSmall data={second}/>
        <ProductSmall data={third}/>
      </div>
    </div>
  )
}

/* function Products() {
  const [first, second, third] = productData;
  return (
    <>
      <BigBox data={first} />
      <SmallBox data={second} />
      <SmallBox data={third} />
    </>
  );
} */

export default Products;