import React from 'react';
import Component3 from '../Component3';

class Component2 extends React.Component{
  render(){
    return(
      <React.Fragment>
        <p>Holi, soy componente 2</p>
        <Component3 />
      </React.Fragment>
    )
  }
}

export default Component2;