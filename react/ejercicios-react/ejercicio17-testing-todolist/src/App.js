import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Tasks from '../src/components/Tasks';
import { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState('');
  const [add, setAdd] = useState([]);

  function handleInput(value){
    setInputValue(value);
  }

  function handleButton(){
    if(inputValue != ''){
      setAdd([...add, inputValue])
      setInputValue('')
    }
  }
  
  return (
    <div className="App">
      <Input type='text' handleInput={handleInput} value={inputValue}/>
      <Button name='Agregar' handleButton={handleButton}/>
      <Tasks tasks={add}/>
    </div>
  );
}

export default App;
