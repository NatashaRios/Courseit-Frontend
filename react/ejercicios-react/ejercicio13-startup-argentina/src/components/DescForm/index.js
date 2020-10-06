import React from 'react';
import './styles.scss';

function DescForm({label, onChange, name}){
  
  return(
    <>
      <p className='descform-title'>{label}</p>
      <textarea className='descform-text' onChange={onChange} name={name}></textarea>
    </>
  )
}

export default DescForm;