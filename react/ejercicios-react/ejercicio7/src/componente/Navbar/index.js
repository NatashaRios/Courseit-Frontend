import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  handleChange(e) {
    console.log(e.target.value);
    const inputValue = e.target.value;
    const { getData } = this.props;
    getData(inputValue);
  }
  render() {
    const { showAutocomplete } = this.props;
    return(
      <nav className="navbar">
        <h1 className="title-navbar">STARTUP ARGENTINA</h1>
        {showAutocomplete && (
          <input className="input" onChange={(e) => this.handleChange(e)} type="text" placeholder="Buscar startup"/>
        )}
        
        <Link to="/agregar">
        <button className="add">Agregar startup</button>
        </Link>
      </nav>
    )
  }
}

export default Navbar;