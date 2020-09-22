import React from 'react';
import './styles.scss';

function InputForm(props){
  const { name, inputPlaceholder } = props;
  return(
    <div className='inputform-content'>
    <label>
      <p className='inputform-text'>{name}</p>
      <input className='inputform-input' type='text' placeholder={inputPlaceholder} />
    </label>
    </div>
  )
}

export default InputForm;