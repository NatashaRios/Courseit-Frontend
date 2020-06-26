import React from 'react';
import Card from '../Card';
import './styles.css';

class InnerCarousel extends React.Component {
  constructor (props) {
    super(props);
    console.log("Soy el InnerCarousel");
  }
  render() {
    const { items } = this.props;
    return (
      <div className="carrousel-interno">
        {items.map((item, key) => {
          return (
            <Card key={key} item={item} />
          )
        })}
      </div>
    )
  }
}

export default InnerCarousel