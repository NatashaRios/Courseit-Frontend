import React, {useState} from 'react';
import Task from '../Task';

function Tasks(props){
  function handleCallback(name){
    console.log('Padre', name)
    props.handleCallback(name); //Lo paso de tasks a app
  }

  const { tasks } = props;
  return(
    <div>
      <ul>
          {tasks.map((task, key) => {
          return(
            <Task handleCallback={handleCallback} name={task.value} isCompleted={task.isCompleted} key={key}/>
          )
        })}  
        
      </ul>
    </div>
  )
}

export default Tasks; 

/* class Tasks extends React.Component{
  render(){
    const { tasks } = this.props;
    return(
      <React.Fragment>
        <ul>
          {tasks.map((task, key) => {
            return(
              <Task item={task} key={key}/>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}

export default Tasks; */