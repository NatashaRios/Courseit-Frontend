import React from 'react';
import { connect } from 'react-redux';
import { addInputValue } from '../../store';
import {useDispatch, useSelector} from 'react-redux';

function Input(){
  const dispatch = useDispatch();

  function handleChange(value){
    dispatch(addInputValue(value));
  }
   const input = useSelector((state) => state.input);
  return(
    <>
      <input type='text' onChange={(e) => handleChange(e.target.value)}  value={input} />
    </>
  )
}



export default connect()(Input);