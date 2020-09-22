import React from 'react';
import './styles.scss';

function Item(props){

  const { startupInfo } = props;
  return(
    <div className='item-content'>
      <img className='item-img' src={startupInfo.img}/>
      <div className='item-text'>
        <p className='item-title'>{startupInfo.title}</p>
        <p className='item-desc'>{startupInfo.desc}</p>
      </div>
    </div>
  )
}

export default Item;