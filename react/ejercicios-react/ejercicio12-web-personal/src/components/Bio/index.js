import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './styles.css';

function Bio(){

  const { info } = useContext(ThemeContext);
  return(
    <>
    <p className='bio'>{info.bio}</p>
    </>
  )
}

export default Bio;