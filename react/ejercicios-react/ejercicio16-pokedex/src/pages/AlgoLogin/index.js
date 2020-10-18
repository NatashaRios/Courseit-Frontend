import React, {useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useDispatch } from "react-redux";
import { updateUserData } from "../../store";
import { useHistory } from "react-router-dom";

import './styles.scss';

function AlgoLogin(){
  const [userData, setUserData] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
 
  function handleChange(name, value){
    setUserData({...userData, [name]: value});
  }

  function handleClick(){
    const correctUser = 'natu';
    const correctPass = 'natu123'
    const {user, password} = userData;

    if(user == correctUser && password == correctPass){
      dispatch(updateUserData(true));
      history.push('/');
    }else{
      dispatch(updateUserData(false));
    }
  }

  return(
    <div className='algo-login'>
      <Input name='user' label='Usuario' type='text' onChange={handleChange}/>
      <Input name='password' label='Password' type='password' onChange={handleChange}/>
      <Button label='Ingresar' onClick={handleClick}/>
    </div>
  )
}

export default AlgoLogin;