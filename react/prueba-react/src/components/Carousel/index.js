import React from 'react';
import Title from '../Title';
import InnerCarousel from '../InnerCarousel';
import './styles.css'

class Carousel extends React.Component {
  render () {
    return (
      <div className="carousel">
       <Title content={this.props.title}/>
       <InnerCarousel items={this.props.items}/>
      </div>
    )
  }
}

export default Carousel