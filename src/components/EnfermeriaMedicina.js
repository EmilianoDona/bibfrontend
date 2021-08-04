import React, { Component } from "react";

class EnfermeriaMedicina extends Component {
  render() {
    return (
    <React.Fragment>
<table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{this.props.idioma.herramientas.herramientaBib}</th>
      <th scope="col">URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Libros Digitales Salud y Enfermería</td>
      <td>

      <a
                      href="https://www.facebook.com/librosdesaludyenfermeria/?scmts=scwspsdd&extid=mKglVrUQzh2rcdUS"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}

                    >
                         {this.props.idioma.principales.visitar}
                    </a>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Audio Libros</td>
      <td>

      <a
                      href="https://expansion.mx/tecnologia/2020/03/25/por-la-cuarentena-amazon-abre-sus-audiolibros-a-todo-el-publico"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}

                    >
                              {this.props.idioma.principales.visitar}
                    </a>
                    
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Biblioteca Gratuita libros Narrados chicos y chicas</td>
      <td>

<a
                href="https://soybibliotecario.blogspot.com/2020/03/biblioteca-gratuita-libros-narrados.html"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}

              >
                          {this.props.idioma.principales.visitar}
              </a>
              
</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Libros Gratuitos para descargar</td>
      <td>

<a
                href="https://www.joebarcala.com/lista-libros-gratis-descargar/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}

              >
                          {this.props.idioma.principales.visitar}
              </a>
              
</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Museos y Galerias de todo el mundo</td>
      <td>

<a
                href="https://25gramos.com/visita-virtualmente-mas-de-500-museos-y-galerias-de-todo-el-mundo/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}

              >
                          {this.props.idioma.principales.visitar}
              </a>
              
</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Veterinaria - Los libros que necesito gratis</td>
      <td>

<a
                href="https://loslibrosquenecesitogratis.com/category/veterinaria/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}

              >
                          {this.props.idioma.principales.visitar}
              </a>
              
</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Libros Medicina Veterinaria (PDF)</td>
      <td>

<a
                href="https://libros-medicina-veterinaria.blogspot.com/p/presentacion.html?m=1"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}

              >
                          {this.props.idioma.principales.visitar}
              </a>
              
</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Libros de Veterinaria Gratuitos</td>
      <td>

<a
                href="http://librosvetfree.blogspot.com/2018/08/?m=1"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}

              >
                          {this.props.idioma.principales.visitar}
              </a>
              
</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Veterinaria: Free Libros</td>
      <td>

<a
                href="https://www.freelibros.me/category/veterinaria"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}

              >
                          {this.props.idioma.principales.visitar}
              </a>
              
</td>
    </tr>
   

  </tbody>
</table>
    </React.Fragment>

                );
  }
}
export default EnfermeriaMedicina;
