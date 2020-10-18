import React from 'react';
import { connect } from 'react-redux';
import { addButtonInfo} from '../../store';
import {useDispatch} from 'react-redux';

function Button(){
  const dispatch = useDispatch();
  
  function handleClick(){
    dispatch(addButtonInfo());
  }
  return(
    <>
      <button onClick={handleClick}>Agregar</button>
    </>
  )
}


export default connect()(Button);