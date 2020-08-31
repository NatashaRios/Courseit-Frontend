import React from 'react';

function Courso (props) {
  
    const { subtitle } = props;
    return(
      <React.Fragment>
        <h2>{subtitle}</h2>
      </React.Fragment>
    )
  
}

export default Courso;