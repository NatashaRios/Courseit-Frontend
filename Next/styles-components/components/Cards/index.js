import Card from '../Card';
import {CardsStyles} from './style';
import {useState} from 'react';

export default function Cards(){
  const [add, setAdd] = useState([]);

  function handleAdd(price){
    setAdd([...add, price])
  }
  
  const total = add.reduce((a,b) => a + b, 0)

  
  const cards = [
    {
      title: "Curso de Frontend",
      color: "#5cc1b3",
      tags: ["Frontend", "Test"],
      price: 1200
    },
    {
      title: "Curso de prueba",
      color: "#5cc1b3",
      tags: [],
      price: 23
    },
    {
      title: "Curso de Backend",
      color: "#706897",
      tags: ["Backend", "Infra"],
      price: 100
    }
  ]
  return(
    <CardsStyles>
      {cards.map((card, key) => {
        return(
          <Card card={card} key={key} button='Agregar al carrito' handleAdd={handleAdd}/>
        )
      })}
     <p>Total: {total}</p>
    </CardsStyles>
  )
}