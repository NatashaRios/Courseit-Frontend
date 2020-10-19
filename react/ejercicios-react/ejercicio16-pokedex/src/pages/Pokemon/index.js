import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

function Pokemon(){
  const pokemon = useSelector((state) => state.pokemon.pokemon);
  console.log(pokemon)
  return(
    <>
      {pokemon && (
        <div className='pokemon-wrapper'>
          <p className='pokemon-name'>{pokemon[0]}</p>
          <img className='pokemon-img' src={pokemon[1]} />
        </div>
      )}
    </>
  )
}

export default Pokemon;