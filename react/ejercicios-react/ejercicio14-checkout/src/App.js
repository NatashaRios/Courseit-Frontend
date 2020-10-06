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

/* import { ToggleCartProvider } from "./contexts/ToggleCart";
import { ProductProvider } from "./contexts/Product";

function App() {
  const [toggle, setToggle] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleToggle() {
    setToggle((prevState) => !prevState);
  }

  function addProduct(data) {
    setTotalPrice((prevState) => prevState + data.price);
    setProducts((prevState) => [...prevState, data]);
  }

  const toggleCartContext = {
    toggle: true,
    handleToggle: handleToggle
  };

  const productContext = {
    products: products,
    totalPrice: totalPrice,
    addProduct: addProduct
  };

  return (
    <ToggleCartProvider value={toggleCartContext}>
      <Navbar />

      <ProductProvider value={productContext}>
        <Products />
        {toggle && <Checkout />}
      </ProductProvider>
    </ToggleCartProvider>
  );
} */


export default App;
