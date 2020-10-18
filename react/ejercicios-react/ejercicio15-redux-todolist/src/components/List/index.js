import React from 'react';
import Item from '../Item';
import { connect } from 'react-redux';
import {useSelector} from 'react-redux';

function List(){
  const button = useSelector((state) => state.button);
  return(
    <ul>
      {button.map((item, key) => {
        return(
          <Item key={key} item={item}/>
        )
      })}
    </ul>
  )
}


export default connect()(List);