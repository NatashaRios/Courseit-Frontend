import React from 'react';
import CarritoButton from '../CarritoButton';
import './styles.scss';

function Navbar(){
  return(
    <nav className='navbar'>
      <h1 className='navbar-title'>Carrito</h1>
      <CarritoButton />
    </nav>
  )
}

/* function Navbar() {
  const { handleToggle } = useContext(ToggleCartContext);

  return (
    <nav>
      <h1>Checkout </h1>
      <Button
        onClick={handleToggle}
        label="Ver carrito"
        className="button-primary"
      />
    </nav>
  );
} */

export default Navbar;