import React, { useContext } from 'react';
import AllContext from '../../contexts/AllContext';
import './styles.scss';

function CarritoButton(){
  const { handleClickButton } = useContext(AllContext);
  return(
    <>
      <button className='navbar-button' onClick={handleClickButton}>Ver carrito</button>
    </>
  )
}

/* function Button({ label, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
} */

export default CarritoButton;