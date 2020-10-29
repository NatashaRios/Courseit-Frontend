import Project from '../Project';
import { useRouter } from 'next/router'
import styles from '../../styles/Projects.module.scss';

export default function Projects({ projects }){
  const router = useRouter()

  const home = projects.slice(0,3)
  
  return(
    <>
      {router.route == '/' ? (
        home.map((project, key) => {
          return(
            <Project project={project} key={key} />
          )
        })
      ) : (

      projects.map((project, key) => {
        return(
          <Project project={project} key={key} />
        )
      })
      )}
    </>
  )
}