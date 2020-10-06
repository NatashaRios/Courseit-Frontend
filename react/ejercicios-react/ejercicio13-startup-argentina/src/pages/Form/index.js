import React, {useState} from 'react';
import InputForm from '../../components/InputForm';
import DescForm from '../../components/DescForm';
import ButtonForm from '../../components/ButtonForm';
import { useNotEmpty } from '../../hooks/notEmpty';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import './style.scss';

function Form(){
  const [inputs, setInputs] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  
  const requiredFields = ['name', 'logo', 'mail', 'description'];
  const errors = useNotEmpty(inputs, requiredFields);
  const [getter, handleSave] = useLocalStorage();

  function handleInputs(e){
    const { value, name } = e.target;
    
    setInputs({...inputs, [name]: value})
  }

  function addStartup(){
    if (errors == 0) {
      setShowMessage(false)
      console.log('El formulario es valido')
      handleSave(inputs);
    }else{
      setShowMessage(true);
      console.log(`Tenes un error en ${errors}`)
    }
  }
  return(
    <div className='form-content'>
      {showMessage && <p>Completar todos los campos obligatorios, marcados con *</p>}
      <InputForm name='name' label='Nombre*' placeholder='Nombre' onChange={handleInputs}/>
      <InputForm name='logo' label='Logo*' placeholder='Link a imagen' onChange={handleInputs}/>
      <InputForm name='mail' label='Mail*' placeholder='Mail' onChange={handleInputs}/>
      <DescForm name='description' label='Descripción*' onChange={handleInputs}/>
      <InputForm name='web' label='Web' placeholder='Web (opcional)' onChange={handleInputs}/>
      <InputForm name='twitter' label='Twitter' placeholder='Twitter (opcional)' onChange={handleInputs}/>
      <InputForm name='instagram' label='Instagram' placeholder='Instagram (opcional)' onChange={handleInputs}/>
      <ButtonForm label='Agregar Startup' onClick={addStartup}/>
    </div>
  )
}

export default Form;