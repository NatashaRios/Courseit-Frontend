import React from 'react';
import './styles.css';

class Title extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Title