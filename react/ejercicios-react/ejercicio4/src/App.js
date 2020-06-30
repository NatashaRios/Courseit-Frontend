import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    
  this.state = {
    inputValue: "",
    tasks: []
  }
}

handleChange(e) {
  this.setState({
    inputValue: e.target.value
    
  })
}

handleClick() {
 const newValue = this.state.inputValue

 const newTasks = this.state.tasks

 newTasks.push(newValue)

 this.setState({
   tasks: newTasks,
   inputValue: ""
 })

}

  render () {
    const { result } = this.state
    return (
      <React.Fragment>
        <div>
          <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.inputValue} />
          <button onClick={() => this.handleClick()} >Agregar</button>
        </div>
        <ul>
         {this.state.tasks.map((task, key) => {
           return (
             <li key={key}>{task}</li>
           )
         })}
        </ul>
      </React.Fragment>
    )
  }
}

export default App;
