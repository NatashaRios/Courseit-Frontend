import React from 'react';
import { connect } from 'react-redux';
import { addButtonInfo} from '../../store';

function Button(props){
  function handleClick(){
    const { dispatch } = props;
    dispatch(addButtonInfo());
  }
  return(
    <>
      <button onClick={handleClick}>Agregar</button>
    </>
  )
}

function mapStateToProps(state){
  console.log(state)
  return {
    buttonInfo: state.button
  }
}

export default connect(mapStateToProps)(Button);