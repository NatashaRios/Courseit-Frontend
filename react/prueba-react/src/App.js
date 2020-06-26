
import React from 'react';
import Carousel from './components/Carousel'

import './App.css';

class App extends React.Component {
  render () {
    const item = [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9MrkaVz1a0N6oO2y7fth30yB41vlvqaVUsQ&usqp=CAU",
        title: "Michi 1",
        price: 2000
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjWK3FHi8youadWG-rY1-uLEjQbGDNsk9rJA&usqp=CAU",
        title: "Michi 2",
        price: 1500
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWjc6tlgFJu-b_2WZ2AnYv56sqoY5LofrYJg&usqp=CAU",
        title: "Michi 3",
        price: 1500
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTojcoGp56HDoXTpTszuQMipOeplyTEMDX0vA&usqp=CAU",
        title: "Michi 4",
        price: 2000
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq7izJSIRvOwY_CnSQ3tw20BFWOOJC2Pv8nA&usqp=CAU",
        title: "Michi 5",
        price: 1250
      }
    ];

    const secondItem = [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ8GEDTrGu-MbB3B4O_56vogWcYpmbRsLwqA&usqp=CAU",
        title: "Michi 1",
        price: 1000
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfA12JOGOC7yMfje5xqBPOYOtoO00kAEOTYA&usqp=CAU",
        title: "Michi 2",
        price: 1500
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7OSkwKCtX_u5NqlHvW0pnIpEZpYeOvU7jFA&usqp=CAU",
        title: "Michi 3",
        price: 1000
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7-urNBzX4B0ZRrq3om1r5TheLZEeEcXNhbA&usqp=CAU",
        title: "Michi 4",
        price: 1500
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQV1TuTglHfGV43GFNlZdGQmT954RQ8dOUJw&usqp=CAU",
        title: "Michi 5",
        price: 1000
      }
      
    ];

    return (
       <div>
         <Carousel title="Michis uno" items={item}/>
         <Carousel title="Michis dos" items={secondItem}/>
       </div>
    );
  }
}

export default App;
