import React from 'react';
import InputForm from '../../components/InputForm';
import DescForm from '../../components/DescForm';
import ButtonForm from '../../components/ButtonForm';
import './style.scss';

function Form(){
  return(
    <div className='form-content'>
      <InputForm name='Nombre' inputPlaceholder='Nombre'/>
      <InputForm name='Logo' inputPlaceholder='Link a imagen'/>
      <InputForm name='Mail' inputPlaceholder='Mail'/>
      <DescForm />
      <InputForm name='Web' inputPlaceholder='Web (opcional)'/>
      <InputForm name='Twitter' inputPlaceholder='Twitter (opcional)'/>
      <InputForm name='Instagram' inputPlaceholder='Instagram (opcional)'/>
      <ButtonForm />
    </div>
  )
}

export default Form;