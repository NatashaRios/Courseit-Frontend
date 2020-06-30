import React from 'react';
import './styles.css';

class Color extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "black"
    }
  }

  handleClick() {
    if(this.state.color == "black") {
      this.setState ({
        color: "red"
      })
    }else {
      this.setState ({
        color: "black"
      })
    }
  }

  render() {
    return (
      <div>
        <p className={this.state.color}>{this.props.text}</p>
        <button onClick={() => this.handleClick()}>Cambia el color</button>
      </div>
    )
  }
}

export default Color