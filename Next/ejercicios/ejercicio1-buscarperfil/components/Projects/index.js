import Project from '../Project';
import { useRouter } from 'next/router'
import styles from '../../styles/Projects.module.scss';

export default function Projects({ projects }){
  const router = useRouter()

  const home = projects.slice(0,3)
  
  return(
    <div className={styles.container}>
      {router.route == '/' && (
        home.map((project, key) => {
          return(
            <Project project={project} key={key} />
          )
        })
      ) 
      }
      {router.route == '/handler/[handler]' && (
        projects.map((project, key) => {
          return(
            <Project project={project} key={key} />
          )
        })
      )}
      
    </div>
  )
}