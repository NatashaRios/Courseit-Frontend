import React from 'react';
import './styles.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default NavBar;