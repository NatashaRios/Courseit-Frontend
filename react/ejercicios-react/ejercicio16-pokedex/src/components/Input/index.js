import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.scss';

function Input({label, type, onChange, name, placeholder}){
  const pathname = useLocation().pathname
  return(
    <>
    {pathname == '/login' &&
    <label className='input-content'>
      <p className='label-input'>{label}</p>
      <input className='input-input' type={type} onChange={(e) => onChange(name, e.target.value)} />
    </label>
    }
    {pathname == '/' &&
      <input className='input-home' type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/>
    }
    </>
  )
}

export default Input;