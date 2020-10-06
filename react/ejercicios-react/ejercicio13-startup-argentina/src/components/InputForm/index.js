import React from 'react';
import './styles.scss';

function InputForm({label, placeholder, onChange, name}){
  
  return(
    <div className='inputform-content'>
    <label>
      <p className='inputform-text'>{label}</p>
      <input className='inputform-input' type='text' placeholder={placeholder} onChange={onChange} name={name}/>
    </label>
    </div>
  )
}

export default InputForm;