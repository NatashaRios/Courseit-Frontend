import React from 'react';
import Project from '../Project';
import './styles.css';

class Projects extends React.Component {
  render() {
    return(
      <div className="projects">
         {this.props.repos.map((repo, key) => {
          return <Project key={key} repo={repo} />
        })}
      </div>
    )
  }
}

export default Projects;