import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ height: "40px", padding: "0 20px" }}
        >

          
          <a
            className="navbar-brand d-xs-none mr-0"
            href="http://www.umaza.edu.ar"
            target="_blank"
            title="Universidad Juan Agustín Maza: Sitio Oficial"
          >
            UMaza
          </a>
          <div className="float-right" style={{marginLeft: "auto"}}>


          <a
              href="https://drive.google.com/open?id=1gyxtFA282TSmxOFftZuMmArUplhVMbv_"
              target="_blank"
              title={this.props.idioma.header.menu1.manual}
              data-placement="bottom"
              className="mr-3"
            >
             <i class="fas fa-book-open fa-2x"></i>
            </a>
            <a
              href="http://opac.umaza.edu.ar/opac2/"
              target="_blank"
              title={this.props.idioma.header.menu1.opac}
              data-placement="bottom"
              className="mr-3"
            >
              <i className="fas fa-desktop fa-2x" />
            </a>
            <a
              href="http://repositorio.umaza.edu.ar/"
              target="_blank"
              title={this.props.idioma.header.menu1.repositorio}
              data-placement="bottom"
              className="mr-3"
            >
              <i className="fas fa-server fa-2x" />
            </a>
            <NavLink
              to="/reservacion"
              title={this.props.idioma.header.menu1.reservacion}
              data-placement="bottom"
              className="mr-3"
            >
              <i className="fas fa-calendar-alt fa-2x" />
            </NavLink>
            <NavLink
              to="/bibliotecas-digitales"
              title={this.props.idioma.header.menu1.bibliotecasdigitales}
              data-placement="bottom"
              className="mr-3"
            >
              <i className="fas fa-book fa-2x" />
            </NavLink>
            <NavLink
              to="/herramientas-bibliotecarias"
              title={this.props.idioma.header.menu1.bibliotecariosherramientas}
              data-placement="bottom"
              className="mr-3"
            >
              <i className="fas fa-tools fa-2x" />
            </NavLink>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <NavLink className="navbar-brand" to="/">
          Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown-quienes-somos"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.props.idioma.header.menu2.quienessomos.titulo}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdown-quienes-somos"
                >
                  <NavLink
                    className="dropdown-item"
                    to="/quienes-somos/biblioteca"
                  >
                    {this.props.idioma.header.menu2.quienessomos.biblioteca}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item"
                    to="/quienes-somos/editorial"
                  >
                    {this.props.idioma.header.menu2.quienessomos.editorial}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item"
                    to="/quienes-somos/imprenta"
                  >
                    {this.props.idioma.header.menu2.quienessomos.imprenta}
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown-Ingresos"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.props.idioma.header.menu2.ingresos.titulo}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdown-Ingresos"
                >
                  <NavLink className="dropdown-item" to="/Ingresos17">
                  {this.props.idioma.header.menu2.ingresos.i2017}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="/Ingresos18">
                  {this.props.idioma.header.menu2.ingresos.i2018}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="/Ingresos19">
                  {this.props.idioma.header.menu2.ingresos.i2019}
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown-Ingresos"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.props.idioma.header.menu2.infobiblioteca.titulo}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdown-InfoBiblioteca"
                >
                  <a className="dropdown-item"
                    href="https://drive.google.com/open?id=1jCk4ybKvFEZ8pmvssZO849bzPg0LmSM4"
                    target="_blank">
                    {this.props.idioma.header.menu2.infobiblioteca.calendario}
                  </a>
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="/formularios">
                  {this.props.idioma.header.menu2.infobiblioteca.formulario}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item"
                    href="https://drive.google.com/open?id=1kmaoIMaM0j5crba_iR39ykg0pjjwlNwx"
                    target="_blank">
                    {this.props.idioma.header.menu2.infobiblioteca.guia}
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item"
                    href="https://www.online.umaza.edu.ar/general/catalogo.asp"
                    target="_blank">
                    {this.props.idioma.header.menu2.infobiblioteca.libreria}
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item"
                    href="http://www.radu.edu.ar/"
                    target="_blank">
                    {this.props.idioma.header.menu2.infobiblioteca.radbu}
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item"
                    href="https://www.ebooks7-24.com/?ed=256"
                    target="_blank">
                    {this.props.idioma.header.menu2.infobiblioteca.bibliotecaDigital}
                  </a>
                  

                </div>
              </li>

           
      


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown-quienes-somos"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.props.idioma.header.menu2.galeria.titulo}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdown-quienes-somos"
                >
                  <NavLink className="dropdown-item" to="/galeria/nutricion">
                  {this.props.idioma.header.menu2.galeria.galeria1}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="/galeria/exposicioncuadros">
                  {this.props.idioma.header.menu2.galeria.galeria2}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="/galeria/fainbinda">
                  {this.props.idioma.header.menu2.galeria.galeria3}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item"
                    to="/galeria/fechaspatrias"
                  >
                    {this.props.idioma.header.menu2.galeria.galeria4}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="/galeria/feriaideas">
                  {this.props.idioma.header.menu2.galeria.galeria5}
                  </NavLink>
                  
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item"
                    to="/galeria/jornadasinvestigacion"
                  >
                    {this.props.idioma.header.menu2.galeria.galeria6}
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink className="dropdown-item" to="/galeria/maritaoliva">
                    {this.props.idioma.header.menu2.galeria.galeria7}
                  </NavLink>

                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item"
                    to="/galeria/obraspostales"
                  >
                    {this.props.idioma.header.menu2.galeria.galeria8}
                  </NavLink>
                </div>
              </li>
{/* Coronavirus */}

              <li className="nav-item">
                <NavLink className="nav-link" to="/pandemia">
                {this.props.idioma.header.menu2.coronavirus.material}
                </NavLink>
              </li>

{/* Coronavirus */}

{/* Bases de Datos Mincyt */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/mincyt">
                  Mincyt
                </NavLink>
              </li>
{/* Bases de Datos Mincyt */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                {this.props.idioma.header.menu2.contacto}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
