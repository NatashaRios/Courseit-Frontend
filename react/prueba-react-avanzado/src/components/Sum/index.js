import React from 'react';

class Sum extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstInput: 0,
      secondInput: 0,
      sum: 0
    }
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleClick(){
    const { firstInput, secondInput } = this.state;

    this.setState({
      sum: parseInt(firstInput) + parseInt(secondInput)
    })
  }
  render(){
    const { sum } = this.state;
    return(
      <div>
        <input type='text' name='firstInput' onChange={(e) => this.handleChange(e)}/>
        <input type='text' name='secondInput' onChange={(e) => this.handleChange(e)}/>
        <button onClick={() => this.handleClick()}>Sumar</button>
        <p>La suma es: {sum}</p>
      </div>
    )
  }
}

export default Sum;