import React from 'react';
import Title from '../Title';
import InnerCarousel from '../InnerCarousel';
import './styles.css';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      products: []
    }
  }

     handleChange(e) {
      this.setState({
        inputValue: e.target.value
      })
    } 
      
      async handleClick() {
        const searchValue = this.state.inputValue;
        const getCarouselData = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}e&limit=5`);
        const getCarouselDataJson = await getCarouselData.json()
        
        this.setState({
          products: getCarouselDataJson.results
        })
      } 
     

     
  
  render() {
    console.log(this.state.result)
    return(
      <div>
        <Title title={this.state.inputValue} />
        <input onChange={(e) => this.handleChange(e)} type="text" />
        <button onClick={() => this.handleClick()} >Buscar</button>
        <InnerCarousel products={this.state.products}/>
      </div>
    )
  }
}


export default Carousel