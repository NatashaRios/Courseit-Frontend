import React from 'react';
import Navbar from './componentes/Navbar'
import Cards from './componentes/Cards';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <Navbar title="STARUP ARGENTINA" add="Agregar starup"/>
        <Cards />
        <h5 className="title-made">
          Made with ♥ by Natasha Rios
        </h5>
      </div>
    )
  }
}


export default App;
