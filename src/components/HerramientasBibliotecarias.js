import React, { Component } from "react";

class HerramientasBibliotecarias extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{this.props.idioma.herramientas.titulo}</th>
                  <th scope="col">LINK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{this.props.idioma.herramientas.herramienta1}</td>
                  <td>
                    <a
                      href="http://www.infotecarios.com/darwinismo-digital-adapta-tu-biblioteca-para-sobrevivir/#.W5vl0CRKjcc"
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
                  <td>{this.props.idioma.herramientas.herramienta2}</td>
                  <td>
                    <a
                      href="https://es.calameo.com/read/000075335257895264ba5"
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
                  <td>{this.props.idioma.herramientas.herramienta3}</td>
                  <td>
                    <a
                      href="http://www.prensa.mendoza.gov.ar/la-biblioteca-publica-general-san-martin-inicia-su-campana-volve-a-leer-a-la-biblioteca/"
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
                  <td>{this.props.idioma.herramientas.herramienta4}</td>
                  <td>
                    <a
                      href="http://www.infotecarios.com/edicion-y-publicacion-de-revistas-academicas-el-rol-de-la-biblioteca/#.W5vm-SRKjcc"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>{this.props.idioma.herramientas.herramienta5}</td>
                  <td>
                    <a
                      href="http://www.slideshare.net/radarik/manual-de-normas-y-estandares-de-digitalizacion-de-documentos"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>{this.props.idioma.herramientas.herramienta6}</td>
                  <td>
                    <a
                      href="http://www.sentirpositivo.com/index.php?Pag=308"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>{this.props.idioma.herramientas.herramienta7}</td>
                  <td>
                    <a
                      href="http://normasapa.com/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>{this.props.idioma.herramientas.herramienta8}</td>
                  <td>
                    <a
                      href="https://unlp.edu.ar//institucional/el-repositorio-institucional-de-la-unlp-es-el-mejor-de-argentina-y-crece-a-nivel-mundial-16024"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>{this.props.idioma.herramientas.herramienta9}</td>
                  <td>
                    <a
                      href="http://bibliotecacentral.unam.mx/tesis.html "
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>{this.props.idioma.herramientas.herramienta10}</td>
                  <td>
                    <a
                      href="http://www.ambac.org.mx/ "
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  
                  <td>{this.props.idioma.herramientas.herramienta11}</td>
                  <td>
                    <a
                      href="https://www.sai.com.ar/ "
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>{this.props.idioma.herramientas.herramienta12}</td>
                  <td>
                    <a
                      href="http://www.bnm.me.gov.ar/ "
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>{this.props.idioma.herramientas.herramienta13}</td>
                  <td>
                    <a
                      href="http://www.citynet.com.ar/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>{this.props.idioma.herramientas.herramienta14}</td>
                  <td>
                    <a
                      href="http://www.bac.org.ar/ "
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>{this.props.idioma.herramientas.herramienta15}</td>
                  <td>
                    <a
                      href="http://eleternoestudiante.com/normas-apa-2019/?fbclid=IwAR2NYJiHBcYMBp0jI7r8FDFAiuYfTktM5iIiScyBzOiQwBOez--n4vPAm3A"
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
    );
  }
}

export default HerramientasBibliotecarias;
