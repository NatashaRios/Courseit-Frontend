import React from 'react';
import Footer from '../../componente/Footer';
import startups from '../../data/startups.json';
import './styles.css';
class ProductPage extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      img: "",
      name: "",
      desc: ""
    };
  }

  componentDidMount() {
    const startups = localStorage.getItem("startups");
    if(startups) {
      const parsedStartups = JSON.parse(startups);
      console.log(parsedStartups)
      const filtered = parsedStartups.filter((startup) => {
        return startup.name.toLowerCase() == this.props.match.params.productId;
      }) 
      this.setState({
        img: filtered[0].logo,
        name: filtered[0].name,
        desc: filtered[0].desc
      });
    }
    /* const filtered = startups.filter((startup) => {
      
      return startup.id == this.props.match.params.productId;

    }); */
    
    
  
  }
    
  render() {
    const { img, name, desc } = this.state
    
    return(
      <div className="product-wrapper">
        <div className="product-header">
          <div className="div-img">
            <img className="product-img" src={img} />
          </div>
            <h1 className="product-title">{name}</h1>
        </div>
        <span className="product-desc">{desc}</span>
        <footer className="product-footer">
        <Footer />
      </footer>
      </div>
      
    )
  }
}

export default ProductPage;