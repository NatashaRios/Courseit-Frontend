import React from 'react';
import './styles.scss';

function Item(props){

  const { startupInfo } = props;
  return(
    <div className='item-content'>
      <img className='item-img' src={startupInfo.logo}/>
      <div className='item-text'>
        <p className='item-title'>{startupInfo.name}</p>
        <p className='item-desc'>{startupInfo.description}</p>
      </div>
    </div>
  )
}

export default Item;