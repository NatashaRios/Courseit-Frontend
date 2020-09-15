import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import CarouselInfo from '../../components/CarouselInfo';
import './styles.scss';


function Carousel(){
  const [inputSearch, setInputSearch] = useState('');
  
  function handleCallback(inputValue){
    setInputSearch(inputValue)
  }
  return(
    <>
      <Navbar handleCallback={handleCallback}/>
      <div className='content-second'>
        <p className='text-second'>Basado en tu última visita <a href='#'>Ver historial</a></p>
        <CarouselInfo inputSearch={inputSearch}/>
      </div>
    </>
  )
}

export default Carousel;