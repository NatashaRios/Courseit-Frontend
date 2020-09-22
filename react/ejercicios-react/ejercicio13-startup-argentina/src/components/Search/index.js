import React, {useContext} from 'react';
import InputContext from '../../contexts/InputContext';
import './styles.scss';

function Search(){

  const { handleInput } = useContext(InputContext);

  function handleChange(e){
    handleInput(e.target.value);
  }
  return(
    <>
      <input className='search-input' onChange={handleChange} type='text' placeholder='Buscar'/>
    </>
  )
}

export default Search;