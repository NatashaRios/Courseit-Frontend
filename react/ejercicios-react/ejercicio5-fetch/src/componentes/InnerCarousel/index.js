import React from 'react';
import Card from '../Card';
import './styles.css';

class InnerCarousel extends React.Component {
 /*  constructor(props) {
    super(props);

    this.state = {
      infoMl: []
    }
   
  }

  async componentDidMount() {
    //const getMl = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=maquillaje&limit=5");
    const getMl = await fetch ("https://api.mercadolibre.com/sites/MLA/search?q=");
    const getMlJson = await getMl.json();

    this.setState({
      infoMl: getMlJson.query
    })
    
  } */
  
  render() {
    
    return(
      <div className="innerCarousel">
        {this.props.products.map((item, key) => { 
          return <Card key={key} item={item} />          
        })} 
      </div>
    )
  }
}

export default InnerCarousel