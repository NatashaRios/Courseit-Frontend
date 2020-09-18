import React from 'react';
import './styles.css';

function Project(props){
  
  const {repo} = props;
  return(
    <>
      <li className='project'>{repo}</li>
    </>
  )
}

export default Project;