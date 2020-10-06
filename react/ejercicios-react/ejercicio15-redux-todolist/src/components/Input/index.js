import React from 'react';
import { connect } from 'react-redux';
import { addInputValue } from '../../store';

function Input(props){

  function handleChange(value){
    const { dispatch } = props;
    dispatch(addInputValue(value));
    
  }
  return(
    <>
      <input type='text' onChange={(e) => handleChange(e.target.value)}  value={props.inputValue} />
    </>
  )
}

function mapStateToProps(state){
  
  return {
    inputValue: state.input
  }
}

export default connect(mapStateToProps)(Input);