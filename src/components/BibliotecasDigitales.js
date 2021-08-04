import React, { Component } from "react";
// import {Link} from "react-router";
class BibliotecasDigitales extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">
                    {this.props.idioma.bibliotecasdigitales.titulo1}
                    <br />
                    {this.props.idioma.bibliotecasdigitales.titulo2}
                  </th>
                  <th scope="col">LINK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{this.props.idioma.bibliotecasdigitales.revistasdigitales.revista1}</td>
                  <td>
                    <a
                      href="http://revistasaa.net/"
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
                  <td>{this.props.idioma.bibliotecasdigitales.revistasdigitales.revista2}</td>
                  <td>
                    <a
                      href="http://revistasaa.net/portales/29"
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
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista3}
                  </td>
                  <td>
                    <a
                      href="http://repositorio.umaza.edu.ar/ojs/index.php/enlm/index?fbclid=IwAR2y30jlN1_C41dwJgI1AMpACKKd1nYa8yWeW9NEhAblYwUA4JavTcayt4E
"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista4}
                  </td>
                  <td>
                    <a
                      href="https://doaj.org/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista5}
                  </td>
                  <td>
                    <a
                      href="http://revistas.um.es/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista6}
                  </td>
                  <td>
                    <a
                      href="https://www.redib.org/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista7}
                  </td>
                  <td>
                    <a
                      href="https://www.redib.org/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista8}
                  </td>
                  <td>
                    <a
                      href="http://oaister.worldcat.org/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista9}
                  </td>
                  <td>
                    <a
                      href="http://erevistas.uca.edu.ar/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista10}
                  </td>
                  <td>
                    <a
                      href="http://revistas.urosario.edu.co/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista11}
                  </td>
                  <td>
                    <a
                      href="http://www.scielo.org/php/index.php?lang=es"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista12}
                  </td>
                  <td>
                    <a
                      href="http://www.redalyc.org/home.oa"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista13}
                  </td>
                  <td>
                    <a
                      href="http://www.veterinaria.org/revistas/redvet/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista14}
                  </td>
                  <td>
                    <a
                      href="https://www.uv.es/RELIEVE/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista15}
                  </td>
                  <td>
                    <a
                      href="http://revistas.csic.es/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">16</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista16}
                  </td>
                  <td>
                    <a
                      href="http://revistas.urosario.edu.co/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">17</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista17}
                  </td>
                  <td>
                    <a
                      href="https://revistas.uchile.cl/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">18</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista18}
                  </td>
                  <td>
                    <a
                      href="https://revistas.unc.edu.ar/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">19</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista19}
                  </td>
                  <td>
                    <a
                      href="http://revistas.uncu.edu.ar/ojs/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">20</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista20}
                  </td>
                  <td>
                    <a
                      href="https://cerac.unlpam.edu.ar/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">21</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista21}
                  </td>
                  <td>
                    <a
                      href="https://revistas.unlp.edu.ar/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">22</th>
                  <td>{this.props.idioma.bibliotecasdigitales.revistasdigitales.revista22}</td>
                  <td>
                    <a
                      href="https://revistaelectronica.unlar.edu.ar/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">23</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista23}
                  </td>
                  <td>
                    <a
                      href="http://www.unsam.edu.ar/revistasacademicas/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">24</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.revistasdigitales.revista24}
                  </td>
                  <td>
                    <a
                      href="http://revistas.unne.edu.ar/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">25</th>
                  <td>{this.props.idioma.bibliotecasdigitales.revistasdigitales.revista25}
                  </td>
                  <td>
                    <a
                      href="http://puntodeencuentro.utn.edu.ar/?page_id=127"
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
                  <th scope="col">{this.props.idioma.bibliotecasdigitales.titulo3}<br></br>{this.props.idioma.bibliotecasdigitales.titulo4}</th>
                  <th scope="col">LINK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca1}</td>
                  <td>
                    <a
                      href="http://www.biblioteca.mincyt.gob.ar/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca2}
                  </td>
                  <td>
                    <a
                      href="https://www.ciberoteca.com/homecas.asp"
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
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca3}
                    </td>
                  <td>
                    <a
                      href="https://dialnet.unirioja.es/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca4}
                  </td>
                  <td>
                    <a
                      href="http://www.iberoamericadigital.net/es/Inicio/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca5}
                  </td>
                  <td>
                    <a
                      href="http://hispana.mcu.es/es/estaticos/contenido.cmd?pagina=estaticos/presentacion"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca6}
                  </td>
                  <td>
                    <a
                      href="http://www.bne.es/es/Catalogos/BibliotecaDigitalHispanica/Inicio/index.html"
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
                  <td>{this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca7}
                  </td>
                  <td>
                    <a
                      href="http://biblioteca.afip.gob.ar/search/query/index.aspx"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca8}
                  </td>
                  <td>
                    <a
                      href="http://www.who.int/elena/es/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca9}
                  </td>
                  <td>
                    <a
                      href="https://www.europeana.eu/portal/en"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca10}
                  </td>
                  <td>
                    <a
                      href="https://gallica.bnf.fr/accueil/?mode=desktop"
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
                  <td>{this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca11}</td>
                  <td>
                    <a
                      href="http://bibliotecas.csic.es/biblioteca-virtual"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca12}
                  </td>
                  <td>
                    <a
                      href="http://bvpb.mcu.es/es/consulta/busqueda.cmd"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca13}
                  </td>
                  <td>
                    <a
                      href="http://www.cervantesvirtual.com/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca14}
                  </td>
                  <td>
                    <a
                      href="http://www.cervantesvirtual.com/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca15}
                  </td>
                  <td>
                    <a
                      href="https://dp.la/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">16</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca16}
                  </td>
                  <td>
                    <a
                      href="http://www.latindex.ppl.unam.mx/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">17</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca17}
                  </td>
                  <td>
                    <a
                      href="http://www.portalesmedicos.com/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">18</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca18}
                  </td>
                  <td>
                    <a
                      href="https://www.clacso.org.ar/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">19</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca19}
                  </td>
                  <td>
                    <a
                      href="http://www.biblioteca.uach.cl/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">20</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca20}
                  </td>
                  <td>
                    <a
                      href="https://bidi.unam.mx/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                      title={this.props.idioma.principales.iralapagina}
                    >
                      {this.props.idioma.principales.visitar}
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">21</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.bibliotecasdigitales.biblioteca21}
                  </td>
                  <td>
                    <a
                      href="https://es.wikisource.org/wiki/Portada"
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
                  <th scope="col">
                  {this.props.idioma.bibliotecasdigitales.titulo5}
                    <br />
                    {this.props.idioma.bibliotecasdigitales.titulo6}
                  </th>
                  <th scope="col">LINK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro1}
                  </td>
                  <td>
                    <a
                      href="http://47jaiio.sadio.org.ar/sites/default/files/SIE-02.PDF"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro2}
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=0B8eSp-Bxj6t0QThtMnNFVDY3YjA"
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
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro3}
                  </td>
                  <td>
                    <a
                      href="http://www.anmat.gov.ar/alimentos/normativas_alimentos_caa.asp"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro4}
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=0B8eSp-Bxj6t0Z3VPNk5kQkZNTDA"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro5}
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=0B8eSp-Bxj6t0VnJxUmk1ZUY2XzQ"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro6}
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=0B8eSp-Bxj6t0dnA2REw5X3E2QzQ"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro7}
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=0B8eSp-Bxj6t0RmZqWm16NUwza0k"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro8}
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=0B8eSp-Bxj6t0cVlOMk9HVHdEQjA"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro9}
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=0B8eSp-Bxj6t0VV9IUG5uT2ZFSnM"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro10}
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/open?id=0B8eSp-Bxj6t0VUJXX1B0ZHhVaEk"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro11}
                  </td>
                  <td>
                    <a
                      href="http://www.redalyc.org/home.oa"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro12}
                  </td>
                  <td>
                    <a
                      href="http://www.radu.edu.ar/Info/rvirtual.html"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro13}
                  </td>
                  <td>
                    <a
                      href="http://www.saij.gob.ar/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro14}
                  </td>
                  <td>
                    <a
                      href="http://cosechador.siu.edu.ar/bdu3/"
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
                  <td>
                  {this.props.idioma.bibliotecasdigitales.librosdigitales.libro15}
                  </td>
                  <td>
                    <a
                      href="https://www.educacion.gob.es/teseo/irGestionarConsulta.do;jsessionid=9DC6EAB763C75348C57AF8D28793A01D
                      "
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
export default BibliotecasDigitales;
