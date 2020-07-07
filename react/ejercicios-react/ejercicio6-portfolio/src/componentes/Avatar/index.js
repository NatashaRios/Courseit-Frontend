import React from 'react';
import './styles.css';

class Avatar extends React.Component {
  render() {
    return(
      <div className="avatar">
        <img className="img" src={this.props.img} />
      </div>
    )
  }
}

export default Avatar;