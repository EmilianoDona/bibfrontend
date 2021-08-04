import React, { Component } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div>
      <footer>
        <div className="row site-footer">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h3 className="text-center">
        {this.props.idioma.footer.col1.titulo1} <span>{this.props.idioma.footer.col1.titulo2}</span>

            </h3>
            <p>
              <b>
                <span>{this.props.idioma.footer.col1.direccion1}: </span> 
                {this.props.idioma.footer.col1.direccion2}
                <br />
              </b>
            </p>
            <div className="row">
              <div className="col-sm">
                <div className="googleMaps">
                  <div className="titulo">
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d418.74407105779454!2d-68.81017151199987!3d-32.899422301444794!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1536006600430"
                    width="150"
                    height="150"
                    title="Ubicación"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h3 className="text-center">
            {this.props.idioma.footer.col2.titulo1} <span>{this.props.idioma.footer.col2.titulo2} </span>
            </h3>
            <p>
              <b>
                <span>{this.props.idioma.footer.col2.biblioteca1}</span> {this.props.idioma.footer.col2.biblioteca2}
                <br />
                <br />
                <span>{this.props.idioma.footer.col2.editorial1}</span> {this.props.idioma.footer.col2.editorial2}
                <br />
                <br />
                <span>{this.props.idioma.footer.col2.imprenta1}</span> {this.props.idioma.footer.col2.imprenta2}
                <br />
                <br />
              </b>
            </p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <h3>
            {this.props.idioma.footer.col3.titulo1} <span>{this.props.idioma.footer.col3.titulo2}</span>
            </h3>
            <nav className="redes-sociales">
              <a
                href="https://www.facebook.com/bibliotecaumazaoficial/"
                title="Facebook Somos Biblioteca UMaza"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="https://www.instagram.com/somosumaza/?hl=es-la"
                title="Instagram Somos UMaza"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="https://www.youtube.com/user/UniversidadMaza"
                title="YouTube Somos UMaza"
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="https://api.whatsapp.com/send?phone=5492612531615"
                title="WhatsApp"
                target="_blank"
              >
                <i className="fab fa-whatsapp" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="mailto:biblioteca@umaza.edu.ar"
                title={this.props.idioma.footer.col3.correo}
              >
                <i className="fas fa-envelope" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="http://www.radioumaza.com/"
                title="Radio"
                target="_blank"
              >
                <i className="fas fa-broadcast-tower" />
              </a>
            </nav>
            <br />
            <br />
            <h3>
            {this.props.idioma.footer.col3.telefono1} <span>{this.props.idioma.footer.col3.telefono2}</span>
            </h3>
            <div style={{ color: "white", fontWeight: "bold" }}>
              +54 (0261) - <span>4056223</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <h3>
            {this.props.idioma.footer.col4.titulo1} <span> {this.props.idioma.footer.col4.titulo2}</span>
            </h3>
            <div className="container">
              <div className="row">
                <div className="col-sm efecto">
                  <div onClick={() => this.props.cambiarIdioma("en")}>
                    <img
                      src="/assets/img/footer/ingles.png"
                      style={{ width: "4rem", height: "4rem" }}
                      className="card-img-top"
                      title="Visit page in English"
                      alt="ingles"
                    />
                  </div>
                </div>
                <div className="col-sm efecto">
                <div onClick={() => this.props.cambiarIdioma("es")}>
                  <img
                      src="/assets/img/footer/español.png"
                      style={{ width: "4rem", height: "4rem" }}
                      className="card-img-top"
                      title="Visitar página en Español"
                      alt="español"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <br />
                  <span>{this.props.idioma.footer.col4.ingles}</span>
                </div>
                <div className="col-sm">
                  <br />
                  <span>{this.props.idioma.footer.col4.español}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="copyright">
          Copyright &copy; 2019 - Biblioteca Central - Universidad Juan Agustín
          Maza
        </p>
      </footer>
      </div>
    );
  }
}

export default Footer;
