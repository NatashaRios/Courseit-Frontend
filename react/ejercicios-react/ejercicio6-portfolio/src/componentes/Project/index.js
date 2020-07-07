import React from 'react';
import './styles.css';

class Project extends React.Component {
  render() {
    return (
      <div>
       <p className="repo">{this.props.repo.name}</p>
      </div>
    )
  }
}

export default Project;