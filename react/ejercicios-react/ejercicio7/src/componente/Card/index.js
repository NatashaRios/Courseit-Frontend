import React from 'react';
import './styles.css';


class Card extends React.Component {
  render() {
    return(
      <div className="card"> 
        <img className="img" src={this.props.img} />
        <div className="text">
          <span className="name-card">{this.props.name}</span>
          <p className="description">{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Card;