import styles from '../../styles/Project.module.scss';

export default function Project({ project }){
  return(
    <>
      <p className={styles.project}>{project.title}</p>
    </>
  )
}