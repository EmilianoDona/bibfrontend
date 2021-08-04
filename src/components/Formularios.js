import React, { Component } from "react";

class Formularios extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">
                  {this.props.idioma.info.formularios.titulo}
                  </th>
                  <th scope="col">LINK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{this.props.idioma.info.formularios.autorizaciondocumentos}</td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=1MyR8uSaasEaabpdb9ZisHhb6mZX-Yh33"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>{this.props.idioma.info.formularios.autorizaciontesis}</td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=13g3Akou42oe0dE_X9o4Q3cqoxZze7Iet"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>
                    {this.props.idioma.info.formularios.notificacionreglamento}
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=14yiU-r4nNusqkzYja-_186bk6wOv_Tmv"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">4</th>
                  <td>{this.props.idioma.info.formularios.reglamentobiblioteca}</td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=1udC8jI87ueATGgDy512BbUZOXN8XdSou"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{this.props.idioma.info.folleteria.titulo}</th>
                  <th scope="col">LINK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{this.props.idioma.info.folleteria.bibliotecafolleto}</td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=1AJsWhMaJcVp0fbr_E3OGfIeH83EG-ym7"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                     {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>{this.props.idioma.info.folleteria.prestamosbusquedas}</td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=1fmcf3Outvd6CmQSW-BakZdpz2_O9lBMt"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>{this.props.idioma.info.folleteria.catalogoopac}</td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=17IwwzW2xa3d-Yp83p_xYPTvHpZn6TuRM"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>{this.props.idioma.info.folleteria.opacguiadeuso}</td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=1Ks49oZIL6Cy4Hmv_kLmzfKGvU4-_Ku_O"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
      
        </div>
      </div>
      </React.Fragment>
    );
  }
}
export default Formularios;
