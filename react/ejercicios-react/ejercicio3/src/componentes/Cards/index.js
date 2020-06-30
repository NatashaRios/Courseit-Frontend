import React from 'react';
import Card from '../Card'
import './styles.css';

class Cards extends React.Component {
  render () {

    const startups = [
      {
        img: "https://pbs.twimg.com/profile_images/1259719811296309249/um6CLRiM_400x400.jpg",
        title: "CourseIt",
        description: "Descripción de Courseit"
      },
      {
        img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFQGjXwWDU2UA/company-logo_200_200/0?e=2159024400&v=beta&t=YhuYq9xbdNdoMH6RS13NVzce_89H-Pdyo8EEK7IxPZc",
        title: "Endava",
        description: "Descripción de Endava"
      }
    ]
    return (
      <div className="cards">
        {startups.map((startup, key) => {
          return (
            <Card key={key} startup={startup}/>
          )
        })}
        
      </div>
    )
  }
}

export default Cards