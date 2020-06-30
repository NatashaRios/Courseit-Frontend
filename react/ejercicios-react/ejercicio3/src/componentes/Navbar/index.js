import React from 'react';
import './styles.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    }
  }

  handleChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  render () {
    return (
      <div className="navbar">
        <h1 className="title-navbar">{this.props.title}</h1>
        <input type="text" placeholder="Buscar" className="input" onChange={(e) => this.handleChange (e)} ></input>
        <a href="#" className="add">{this.props.add}</a>
        <p>{this.state.inputValue}</p>
      </div>
    )
  }
}

export default Navbar