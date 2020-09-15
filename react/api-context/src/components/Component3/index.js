import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

function Component3(){
  const data = useContext(ThemeContext);
  return(
    <>
    <p>Soy el componente 3</p>
    <p>El valor de mi contexto es {data}</p>
    </>
  )
}

 /* class Component3 extends React.Component{
  static contextType = ThemeContext;

  render(){
    return(
      <React.Fragment>
        <p>Holi, soy componente 3</p>
        <p>El valor de mi contexto es {this.context}</p>
      </React.Fragment>
    )
  }
} */

export default Component3; 