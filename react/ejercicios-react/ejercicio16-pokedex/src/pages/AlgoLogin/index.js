import React, {useState} from 'react';
import InputLogin from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
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
      <InputLogin name='user' label='Usuario' type='text' onChange={handleChange}/>
      <InputLogin name='password' label='Password' type='password' onChange={handleChange}/>
      <ButtonLogin label='Ingresar' onClick={handleClick}/>
    </div>
  )
}

export default AlgoLogin;