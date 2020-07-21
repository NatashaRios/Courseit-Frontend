import React from 'react';
import './styles.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navBar">
        <span>{this.props.name}</span>
      </nav>
    )
  }
}

export default NavBar;