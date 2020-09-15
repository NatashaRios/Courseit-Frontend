import React, { useState, useEffect } from 'react';
import Item from '../Item';

function List(props){
  const [dataMl, setDataMl] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData(){
    const data = await fetch ('https://api.mercadolibre.com/sites/MLA/search?q=chocolate&limit=5');
    const dataJson = await data.json()

    setDataMl(dataJson.results)
  }

  return(
    <>
    {dataMl.filter((item) => {
      return item.title.toLowerCase().includes(props.searchParam.toLowerCase());
    }).map((item, key) => {
      return(
        <Item key={item.id ? item.id : key} img={item.thumbnail} title={item.title}/>
      )
    })}
    </>
  )
}

export default List