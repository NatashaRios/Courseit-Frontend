import React from 'react';
import { connect } from 'react-redux';
import { addCounter } from './store';
import './App.css';

class App extends React.Component{

  handleClick(){
    const {dispatch} = this.props;
    dispatch(addCounter());
    console.log(123);
  }
  render(){
    return(
      <React.Fragment>
        <p>El valor del counter es: {this.props.juani}</p>
        <button onClick={() => this.handleClick()} > +1</button>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return{
    juani: state.counter
  }
}

/* function App() {
  return (
    <>
      <p>El valor del counter es: </p>
    </>
  );
} */

export default connect(mapStateToProps)(App);
