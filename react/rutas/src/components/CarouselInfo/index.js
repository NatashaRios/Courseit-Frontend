import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card';
import './styles.scss';

function CarouselInfo(props){
  const[infoMl, setInfoMl] = useState([]);
  const { site } = useParams();

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData(){
    const data = await fetch(`https://api.mercadolibre.com/sites/${site}/search?q=chocolate&limit=10`);
    const dataJson = await data.json();

    setInfoMl(dataJson.results)
  }

  const { inputSearch } = props;
  return(
    <div className='content-card'>
      {infoMl.filter((card) => {
        return card.title.toLowerCase().includes(inputSearch.toLowerCase());
      }).map((card, key) => {

        return(
          <Card key={key} img={card.thumbnail} price={card.price} title={card.title}/>
        )
      })}
    </div>
  )
}

export default CarouselInfo;