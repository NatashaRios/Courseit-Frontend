import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updatePokemon } from "../../store";
import './styles.scss';

function Home(){
  const [pokemon, setPokemon] = useState('')
  const isLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();

  function handleChange(value){
    setPokemon(value)
  }
  
  
  async function handleClick(){
    const getData = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const getDataJson = await getData.json();
    const name = getDataJson.name;
    const img = getDataJson.sprites.front_default;
    
    
    if(pokemon == name) {
      dispatch(updatePokemon(name, img))
    }
    
  }

  
  return(
    <div className='home-wrapper'>
      {isLogged ? <p className='logged'>Bienvenidos a nuestro pokedex</p> : <p className='logged'>No estas autorizado a entrar a esta página <Link to='/login'>Ir a loggearte</Link></p>}
      {isLogged && 
      <>
      <Input placeholder='Escribir nombre del pokemon' type='text' onChange={handleChange}/>
      <Button label='Buscar' onClick={handleClick}/>
      </>
      }
    </div>
  )
}

export default Home;