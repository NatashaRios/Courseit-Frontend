import { TitleStyles } from '../Title/style';
import {CardStyles, TitlesStyles, TagStyles, PriceStyles, ButtonStyles} from './styles'; 
import {useState} from 'react';

export default function Card({card, button, handleAdd}){
  
  const [priceValue, setPriceValue] = useState([]);
  

  function handleClick(){
    handleAdd(card.price)
  }
  return(
    <>
    <CardStyles color={card.color}>
      <TitlesStyles>{card.title}</TitlesStyles>
      {card.tags.map((tag, key) => {
        return(
          <TagStyles key={key} color={card.color}>{tag}</TagStyles>
        )
      })}
      <PriceStyles name={card.price}>${card.price}</PriceStyles>
      <ButtonStyles onClick={handleClick}>{button}</ButtonStyles>
    </CardStyles>
    
    </>
  )
}