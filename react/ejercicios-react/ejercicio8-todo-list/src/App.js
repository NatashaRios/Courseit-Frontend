import React, { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

 function App() {
   const [tasks, setTasks] = useState([]);

   function handleInputValue(inputValue){
    setTasks([
      ...tasks,
      {
        value: inputValue,
        isCompleted: false
      }
    ])
   }

   function handleCallback(name) {
    const modifiedTasks = tasks.map((task) => {
      if (task.value == name) {
        return {
          value: task.value,
          isCompleted: !task.isCompleted
        };
      }

      return task;
    });
    
    setTasks(modifiedTasks);
  }

  return (
    <React.Fragment>
      <AddTask propDePrueba={handleInputValue}/>
      <Tasks handleCallback={handleCallback} tasks={tasks} />
    </React.Fragment>
  );
}

export default App; 

/* class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tasks: []
    }
  }
  handleCallback(inputValue){
    const { tasks } = this.state;
    tasks.push(inputValue);
    this.setState({
      tasks
    })
  }
  render(){
    const { tasks } = this.state;
    return(
      <React.Fragment>
        <AddTask propDePrueba={(inputValue) => this.handleCallback(inputValue)}/>
        <Tasks tasks={tasks}/>
      </React.Fragment>
    )
  }
}

export default App;
 */