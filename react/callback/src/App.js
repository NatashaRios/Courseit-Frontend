import React from 'react';
import Autocomplete from './componentes/Autocomplete';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoCompleteValue: ""
    }
  }

  handleCallback(inputValue) {
    this.setState({
      autoCompleteValue: inputValue
    })
  }
  render () {
    return (
      <React.Fragment>
        <nav>
        <Autocomplete handleCallback={(inputValue) => this.handleCallback(inputValue)} />
        </nav>
        <div>
          Tu Autocomplete dice: {this.state.autoCompleteValue}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
