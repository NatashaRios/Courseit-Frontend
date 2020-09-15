import React, {useState} from 'react';

function AddTask(props){
  const [inputValue, setInputValue] = useState('');

  function handleChange(e){
    setInputValue(e.target.value)
  }

  function handleClick(){
    if(inputValue && props.propDePrueba){
      props.propDePrueba(inputValue);
      setInputValue('');
    }
  }

  function handleKey(e) {
    if(e.keyCode == 13) {
      handleClick();
    }
  }


  return(
    <React.Fragment>
      <input type='text' onChange={handleChange} value={inputValue} onKeyDown={handleKey}/>
      <button onClick={handleClick}>Agregar</button>
    </React.Fragment>
  )
}

export default AddTask;

/* class AddTask extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      inputValue: ''
    }
  }

  handleChange(e){
    const { value } = e.target;
    this.setState({
      inputValue: value
    })
  }

  handleClick(){
    const { inputValue } = this.state;
    if(inputValue != ''){
      this.props.propDePrueba(inputValue);
      this.setState({
        inputValue: ''
      })
    }
  }
  render(){
    const { inputValue } = this.state;
    return(
      <React.Fragment>
        <input type='text' onChange={(e) => this.handleChange(e)} value={inputValue}/>
        <button onClick={() => this.handleClick()}>Agregar</button>
      </React.Fragment>
    )
  }
}

export default AddTask; */