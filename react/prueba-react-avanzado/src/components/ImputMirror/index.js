import React, { Component } from "react";

class InputMirror extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstInput: "",
      secondInput: "",
      showValues: false
    };
  }

  handleFirstInput(e) {
    // NO HACER ESTO
    // this.state.inputValue = e.target.value;
    // this.forceUpdate();

    //ESTO SI HAY QUE HACER
    this.setState({
      firstInput: e.target.value
    });
  }

  handleSecondInput(e) {
    this.setState({
      secondInput: e.target.value
    });
  }

  handleClick() {
    this.setState({
      showValues: true
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.handleFirstInput(e)} />
        <input type="text" onChange={(e) => this.handleSecondInput(e)} />
        <button onClick={() => this.handleClick()}>Copiar</button>
        <br />
        {this.state.showValues && (
          <>
            <p>{this.state.firstInput}</p>
            <span>{this.state.secondInput}</span>
          </>
        )}
      </div>
    );
  }
}

export default InputMirror;