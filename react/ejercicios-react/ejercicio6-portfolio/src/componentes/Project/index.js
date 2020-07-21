import React from 'react';
import './styles.css';

class Project extends React.Component {
  render() {
    return (
      <div>
       <li className="repo">{this.props.repo.name}</li>
      </div>
    )
  }
}

export default Project;