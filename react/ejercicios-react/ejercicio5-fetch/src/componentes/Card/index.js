import React from 'react';
import './styles.css';

class Card extends React.Component {
  render() {
    const { item } = this.props;
    return(
      <div>
         <img src={item.thumbnail} /> 
         <p> Título: {item.title}</p> 
         <p> Precio: ${item.price}</p> 
      </div>
    )
  }
}

export default Card