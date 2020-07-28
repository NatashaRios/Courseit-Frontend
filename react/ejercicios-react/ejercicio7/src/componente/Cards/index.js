import React from 'react';
import Card from '../Card'
import './styles.css'
import { Link } from 'react-router-dom';
class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    }
  }
  componentDidMount(){
    const startups = localStorage.getItem("startups"); //Leemos las startups
    if(startups){
      const parsedStartups = JSON.parse(startups); //Transformamos de string a json
  
    this.setState({
      cards: parsedStartups
    })
    }
    
  }
  
  render() {
    const { cards } = this.state;
    const { filter } = this.props;
    return(
      <div className="cards">
        {cards.map((card, key) => {
          return (
            <React.Fragment key={key}>
            {card.name.toLowerCase().includes(filter.toLowerCase()) && (
              <Link to= { `/productos/${card.name.toLocaleLowerCase()}` }>
              <Card 
              key={key}
              name={card.name}
              img={card.logo}
              description={card.desc}
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
