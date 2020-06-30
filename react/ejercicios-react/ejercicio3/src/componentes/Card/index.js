import React from 'react';
import './styles.css';

class Card extends React.Component {
  render() {
    const {img, title, description} = this.props.startup
    return (
      <div className="card">
        <img src={img} className="img"/>
        <div className="text">
          <span className="title-card">{title}</span>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default Card