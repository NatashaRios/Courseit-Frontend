import React from 'react';
import './styles.css';

class Bio extends React.Component {
  render() {
    return(
      <div className="bio">
        <p>{this.props.bio}</p>
      </div>
    )
  }
}

export default Bio;