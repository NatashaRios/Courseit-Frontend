import React from 'react';
import './styles.scss';

function InputLogin({label, type, onChange, name}){
  return(
    <label className='input-content'>
      <p className='label-input'>{label}</p>
      <input className='input-input' type={type} onChange={(e) => onChange(name, e.target.value)} />
    </label>
  )
}

export default InputLogin;