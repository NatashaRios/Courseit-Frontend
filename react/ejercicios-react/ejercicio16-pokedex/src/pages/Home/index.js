import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

function Home(){
  const isLogged = useSelector((state) => state.user.isLogged);
  return(
    <div>
      {isLogged ? <p>Bienvenidos a nuestro pokedex</p> : <p>No estas autorizado a entrar a esta página</p>}
    </div>
  )
}

export default Home;