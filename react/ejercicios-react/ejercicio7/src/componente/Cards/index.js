import React from 'react';
import Card from '../Card'
import './styles.css'
import { Link } from 'react-router-dom';
class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          name: "CourseIt",
          img: "https://pbs.twimg.com/profile_images/1259719811296309249/um6CLRiM_400x400.jpg",
          description: "Descripción CourseIt"
        },
        {
          name: "Endeva",
          img: "https://pbs.twimg.com/profile_images/1052208764726730753/s5bagDr__400x400.jpg",
          description: "Prueba descripción"
        }
      ]
    }
  }
  render() {
    const { cards } = this.state;
    const { filter } = this.props;
    return(
      <div className="cards">
        {cards.map((card, key) => {
          return (
            <React.Fragment>
            {card.name.toLowerCase().includes(filter.toLowerCase()) && (
              <Link to= { `/productos/${card.name.toLocaleLowerCase()}` }>
              <Card 
              key={key}
              name={card.name}
              img={card.img}
              description={card.description}
              />
              </Link>
            )}
           </React.Fragment>
          )
        })}
         
      </div>
    )
  }
}

export default Cards;