import React from 'react';
import './styles.css';

class Title extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span className="title">{this.props.content}</span>
      </React.Fragment>
    )
  }
}

export default Title