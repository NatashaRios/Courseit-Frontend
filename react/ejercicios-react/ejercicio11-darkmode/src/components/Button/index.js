import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './styles.css';

function Button(props){
  const theme = useContext(ThemeContext)

  const { handleTheme } = props;
  return(
    <>
    <button onClick={handleTheme} className={theme}>Cambiar tema</button>
    </>
  )
}

export default Button;