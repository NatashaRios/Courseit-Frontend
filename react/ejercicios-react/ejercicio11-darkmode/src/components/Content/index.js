import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './styles.css';

function Content(){
  const theme = useContext(ThemeContext)
  return(
    <div className={`${theme} content`}>
    </div>
  )
}

export default Content;