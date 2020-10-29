import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import User from '../components/User';
import Projects from '../components/Projects';
import {useState} from 'react';
import styles from '../styles/Home.module.scss'

export default function Home({info}){
  

  const [inputValue, setInputValue] = useState('');
  const [click, setClick] = useState({});
  function handleInput(value){
    setInputValue(value)
  }

  async function handleSearch(){
    const data = await fetch(`https://api.github.com/users/${inputValue}`)
    const json = await data.json();
    const img = json.avatar_url;
    const name = json.name;
    const desc = json.bio;
    const login = json.login
    
    setClick({img, name, desc, login})
    setInputValue('');
  }

  const nameUser = info.map((user) => {
    return user.user;
  })

  const infoProjects = info.map((projects) => {
    return projects.projects;
  })
  
  return(
    <div className={styles.container}>
      <Title title='Buscá tu perfil'/>
      <div className={styles.search}>
        <Input placeholder='Ingresar nombre del usuario' type='text' handleInput={handleInput} value={inputValue}/>
        <Button label='Buscar' handleSearch={handleSearch}/>
      </div>
      <User user={click}/>
      {click.name == nameUser && (
        <Projects projects={infoProjects[0]}/>
      )}
      
    </div>
  )
}

export async function getStaticProps(){
  const data = await fetch('https://api.jsonbin.io/b/5f9a0a03f0402361dcee131a/1');
  const json = await data.json();

  return{
    props: {
      info: json
    }
  }
}

