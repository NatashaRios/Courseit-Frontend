import React from 'react';

function CourseIt (props){
  
    const { title } = props;
    return(
      <React.Fragment>
        <h1>{props.title}</h1>
      </React.Fragment>
    )
  
}

export default CourseIt;