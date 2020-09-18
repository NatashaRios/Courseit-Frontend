import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Project from '../Project';
import './styles.css';

function Projects(){

  const { repos } = useContext(ThemeContext);
  return(
    <>
    {repos.map((repo, key) => {
      return(
        <Project repo={repo.name} key={key} />
      )
    })}
    </>
  )
}

export default Projects;