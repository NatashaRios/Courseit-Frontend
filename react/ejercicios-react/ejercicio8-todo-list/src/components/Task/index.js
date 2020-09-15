import React, {useState} from 'react';
import './styles.css';

function Task(props){
  function handleClick(){
    const { name, handleCallback } = props;

    if(handleCallback){
      handleCallback(name);
      
    }
  }
   const { name, isCompleted } = props; 
  return(
    <React.Fragment>
       <li onClick={handleClick} style={isCompleted ? { backgroundColor: 'green' } : { backgroundColor: 'white' }}>{name}</li> 
    </React.Fragment>
  )
}

export default Task;