import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import Footer from '../../components/Footer';
import { InputProvider } from '../../contexts/InputContext';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import './styles.scss';

function Home() {
  const [valueInput, setValueInput] = useState('');
  const [getter] = useLocalStorage();

  function handleInput(value){
    setValueInput(value)
    console.log(valueInput)
  }

  const inputContextData = {
    handleInput,
    valueInput 
  }

  return (
    <InputProvider value={inputContextData}>
      <Navbar />
      <List getter={getter}/>
      <Footer valueInput={valueInput}/>
    </InputProvider>
  );
}

export default Home;
