import React from 'react';
import Footer from '../../componente/Footer';
import Startups from '../../data/startups.json';
import './styles.css';
class ProductPage extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {

    }
  }
  render() {
    console.log(Startups);
    return(
      <div className="product-wrapper">
        <div className="product-header">
          <div className="div-img">
            <img className="product-img" src="https://pbs.twimg.com/profile_images/1259719811296309249/um6CLRiM_400x400.jpg" />
          </div>
          <h1 className="product-title">CourseIt</h1>
        </div>
        <span className="product-desc">Descripción</span>
        <footer className="product-footer">
        <Footer />
      </footer>
      </div>
      
    )
  }
}

export default ProductPage;