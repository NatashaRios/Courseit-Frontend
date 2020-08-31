import React, {useState} from 'react';
import Task from '../Task';

function Tasks(){
  const [inputValue, setInputValue] = useState('');
  const [add, setAdd] = useState([]);

  function handleChange(e){
    setInputValue(e.target.value)
  }

  function handleClick(){
    if(inputValue != ''){
      const newAdd = [...add, inputValue];
      setInputValue('')
      setAdd(newAdd)
    }
    
    
  }

  return(
    <div>
      <input type='text' onChange={handleChange} value={inputValue}/>
      <button onClick={handleClick}>Agregar</button>
      <ul>
         {add.map((item, key) => {
          return(
            <Task item={item} key={key}/>
          )
        })} 
        
      </ul>
    </div>
  )
}

export default Tasks;