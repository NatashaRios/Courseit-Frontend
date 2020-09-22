import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import Footer from '../../components/Footer';
import { InputProvider } from '../../contexts/InputContext';
import './styles.scss';

function Home() {
  const [valueInput, setValueInput] = useState('');

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
      <List/>
      <Footer valueInput={valueInput}/>
    </InputProvider>
  );
}

export default Home;
