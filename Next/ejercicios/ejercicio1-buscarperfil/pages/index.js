import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import User from '../components/User';
import Projects from '../components/Projects';
import {useState} from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'

export default function Home({info}){
  const router = useRouter()
  console.log(router.route)
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
    
    setClick({img, name, desc})
    setInputValue('');
  }

  const nameUser = info.map((user) => {
    return user.user;
  })

  const infoProjects = info.map((projects) => {
    return projects.projects;
  })
  
  return(
    <>
      <Title title='Buscá tu perfil'/>
      <Input placeholder='Ingresar nombre del usuario' type='text' handleInput={handleInput} value={inputValue}/>
      <Button label='Buscar' handleSearch={handleSearch}/>
      <User user={click}/>
      {click.name == nameUser && (
        <Projects projects={infoProjects[0]}/>
      )}
      
    </>
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

