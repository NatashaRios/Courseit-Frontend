import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './styles.css';

function Avatar(){

  const { info } = useContext(ThemeContext);
  return(
    <>
    <img className='img-avatar' src={info.avatar_url}/>
    </>
  )
}

export default Avatar;