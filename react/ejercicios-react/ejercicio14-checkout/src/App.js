import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Toggle from './components/Toggle';
import { AllProvider } from './contexts/AllContext'; 
import './App.scss';

function App() {
  const [clickButton, setClickButton] = useState('open');
  const [clickProduct, setClickProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState([]);
  
  function handleClickButton(){
    const toggle = clickButton == 'open' ? 'close' : 'open';
    setClickButton(toggle);
  }

  function handleClick(product){
    setClickProduct([
      ...clickProduct,
      product
    ])

    setCount(count +1);

    const productPrice = product.price;
    setPrice([
      ...price,
      productPrice
    ])
  }

  const allContextData = {
    handleClickButton,
    handleClick,
    count, 
    price
  }

  return (
    <AllProvider value={allContextData}>
      <Navbar />
      <Products />
      <Toggle clickButton={clickButton} clickProduct={clickProduct}/>
    </AllProvider>
  );
}

export default App;
