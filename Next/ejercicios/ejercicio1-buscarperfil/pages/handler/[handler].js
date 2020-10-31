import User from '../../components/User';
import Projects from '../../components/Projects'
import styles from '../../styles/Handler.module.scss';
import { useRouter } from 'next/router'
export default function DynamicRoute({info, infoUser}){
  const router = useRouter()
  
  const nameUser = infoUser.map((user) => {
    return user.user;
  })

  const infoProjects = infoUser.map((projects) => {
    return projects.projects;
  })
  console.log(nameUser)
  console.log(infoProjects)
  return(
    <>
      <User info={info} />
      {info.name == nameUser && (
        <Projects projects={infoProjects[0]} />
      )}
    </>
  )
}


export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps( { params }){
  const { handler } = params;

  const data = await fetch(`https://api.github.com/users/${handler}`);
  const json = await data.json();
  
  const dataUser = await fetch('https://api.jsonbin.io/b/5f9a0a03f0402361dcee131a/1');
  const jsonUser = await dataUser.json()
  return{
    props: {
      info: json,
      infoUser: jsonUser
    },
    revalidate: 3600 * 24
  };
}




 