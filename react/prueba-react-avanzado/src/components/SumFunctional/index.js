import React, { useState } from 'react';

function SumFunctional(){
  const [inputs, setInputs] = useState({firstInput: 0, secondInput: 0});
  const [result, setResult] = useState(0);

  function handleClick(){
    const { firstInput, secondInput } = inputs;
    setResult(+firstInput + +secondInput)
  }

  function handleChange(e){
    const { name, value } = e.target;

    const newState = { //Creamos una nueva variable para luego reemplazarle en nuestro estado
      ...inputs, //Clonamos el puntero en memoria de nuestro estado actual y lo guardamos
      [name]: value //Reemplazamos la propiedad 'name' por la que tenia nuestro antiguo estado inputs
    }

    setInputs(newState) //Sobreescribimos todo nuestro viejo estado con nuestra nueva variable
  }
  return(
    <React.Fragment>
      <input name='firstInput' type='text' onChange={handleChange}/>
      <input name='secondInput' type='text' onChange={handleChange}/>
      <button onClick={handleClick}>Sumar</button>
      <p>La suma es: {result}</p>
    </React.Fragment>
  )
}

export default SumFunctional;