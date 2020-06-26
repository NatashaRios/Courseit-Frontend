import React from 'react';
import './styles.css'

class Card extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      like: "No me gusta"
    }
  }

  handleClick (){
    
    if(this.state.like == "Me gusta") {
      this.setState ({
        like: "No me gusta"
      })
    } else {
      this.setState ({
        like: "Me gusta"
      })
    }
  }

  render () {
    return (
      <div className="card">
        <p className="like">{this.state.like}</p>
        <button className="button" onClick={() => this.handleClick()}>Darle like</button>
          <img className="img" src={this.props.item.img} />
          <p className="info-title">Titulo: {this.props.item.title}</p>
          <p className="info-price">Precio: ${this.props.item.price}</p>
      </div>
    )
  }
}

export default Card