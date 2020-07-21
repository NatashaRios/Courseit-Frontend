import React from 'react';
import Navbar from './componente/Navbar';
import Cards from './componente/Cards';
import Footer from './componente/Footer'
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  handleData(inputValue) {
    this.setState({
      inputValue: inputValue
    })
  }
  render() {
    const { inputValue } = this.state;
    return (
      <div className="wrapper"> 
        <Navbar showAutocomplete={true} getData={(inputValue) => this.handleData(inputValue)}/>
        <Cards filter={inputValue}/>
        <Footer />
        <Link to="/prueba">Ir a prueba</Link>
      </div>
    )
  }
}

export default App;
