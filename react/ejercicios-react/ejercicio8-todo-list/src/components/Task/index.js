import React from 'react';

function Task(props){
   const {item} = props; 
  return(
    <React.Fragment>
       <li>{item}</li> 
    </React.Fragment>
  )
}

export default Task;