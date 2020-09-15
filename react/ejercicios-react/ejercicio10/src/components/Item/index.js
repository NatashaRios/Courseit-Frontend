import React from 'react';

function Item(props){
  const { img, title } = props;
  return(
    <div>
    <img src={img}/>
    <p>{title}</p>
    </div>
  )
}

export default Item;