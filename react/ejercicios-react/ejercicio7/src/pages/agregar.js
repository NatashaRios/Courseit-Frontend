import React from 'react';
import Footer from '../componente/Footer';
import './agregar.css';


class Agregar extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      logo: "",
      email: "",
      desc: "",
      web: "",
      tw: "",
      ig: "",
      aviso1: "hidden",
      aviso2: "hidden"
    }
  }

    handleChange(e) {
      const { name, value } = e.target

      this.setState({
        [name]: value
      })
    }

    handleClick(e) {
      e.preventDefault();
      const { name, logo, email, desc } = this.state;
     
     
      if(name == "" || logo == "" || email == "" || desc == "") {
        this.setState({
          aviso1: "show1",
          aviso2: "hidden"
        })
      }else {
        this.setState({
          aviso2: "show2",
          aviso1: "hidden"
        })
      } 
    }

  render() {
    return(
      <div className="wrapper-agregar">
        <p className={this.state.aviso1}>Por favor completa todos los datos requeridos</p>
        <p className={this.state.aviso2}>Startup creada correactamente. En breve será aprobada</p>
        <form className="formulario">
        <p className="title-agregar">Nombre</p>
        <input className="input-agregar" name="name" onChange={(e) => this.handleChange(e)} type="text" placeholder="Nombre"/>
        <p className="title-agregar">Logo</p>
        <input className="input-agregar" name="logo" onChange={(e) => this.handleChange(e)} type="text" placeholder="Link a Imagen"/>
        <p className="title-agregar">Mail</p>
        <input className="input-agregar" name="email" onChange={(e) => this.handleChange(e)} type="text" placeholder="Mail"/>
        <p className="title-agregar">Descripcion</p>
        <textarea className="input-agregar" name="desc" onChange={(e) => this.handleChange(e)}  value={this.state.desc}></textarea>
        <p className="title-agregar">Web</p>
        <input className="input-agregar" name="web" onChange={(e) => this.handleChange(e)} type="text" placeholder="Web (opcional)"/>
        <p className="title-agregar">Twitter</p>
        <input className="input-agregar" name="tw" onChange={(e) => this.handleChange(e)} type="text" placeholder="Twitter (opcional)"/>
        <p className="title-agregar">Instagram</p>
        <input className="input-agregar" name="ig" onChange={(e) => this.handleChange(e)} type="text" placeholder="Instagram (opcional)"/>
        <button className="boton-agregar" onClick={(e) => this.handleClick(e)}>Enviar</button>
        <Footer />
        </form>
      </div>
    )
  }
}

export default Agregar;

/* class Agregar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      logo: "",
      email: "",
      desc: "",
      web: "",
      tw: "",
      ig: "",
      estaOk: "",
      showMessage: false
    };
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleClick() {
    const { name, email, logo, desc } = this.state;
    const isValid = name && email && logo && desc ? true : false;

    this.setState({
      estaOk: isValid,
      showMessage: true
    });
    // if (name && email && logo && desc) {
    //   this.setState({
    //     estaOk: true,
    //     showMessage: true
    //   });
    // } else {
    //   this.setState({
    //     estaOk: false,
    //     showMessage: true
    //   });
    // }
  }

  render() {
    const { estaOk, showMessage } = this.state;
    return (
      <div className="wrapper-agregar">
        {showMessage && <p>{estaOk ? "Todo salio bien" : "Todo salio mal"}</p>}
        <p className="title-agregar">Nombre</p>
        <input
          className="input-agregar"
          name="name"
          onChange={(e) => this.handleChange(e)}
          type="text"
          placeholder="Nombre"
        />
        <p className="title-agregar">Logo</p>
        <input
          className="input-agregar"
          name="logo"
          onChange={(e) => this.handleChange(e)}
          type="text"
          placeholder="Link a Imagen"
        />
        <p className="title-agregar">Mail</p>
        <input
          className="input-agregar"
          name="email"
          onChange={(e) => this.handleChange(e)}
          type="text"
          placeholder="Mail"
        />
        <p className="title-agregar">Descripcion</p>
        <textarea
          className="input-agregar"
          name="desc"
          onChange={(e) => this.handleChange(e)}
        ></textarea>
        <p className="title-agregar">Web</p>
        <input
          className="input-agregar"
          name="web"
          onChange={(e) => this.handleChange(e)}
          type="text"
          placeholder="Web (opcional)"
        />
        <p className="title-agregar">Twitter</p>
        <input
          className="input-agregar"
          name="tw"
          onChange={(e) => this.handleChange(e)}
          type="text"
          placeholder="Twitter (opcional)"
        />
        <p className="title-agregar">Instagram</p>
        <input
          className="input-agregar"
          name="ig"
          onChange={(e) => this.handleChange(e)}
          type="text"
          placeholder="Instagram (opcional)"
        />
        <button className="boton-agregar" onClick={() => this.handleClick()}>
          Enviar
        </button>
      </div>
    );
  }
}

export default Agregar; */