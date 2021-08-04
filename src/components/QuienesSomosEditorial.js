import React, { Component } from "react";

class QuienesSomosEditorial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-8 d-flex align-items-stretch">
            <div className="jumbotron">
              <h1 className="display-4">{this.props.idioma.editorial.jumbotron.titulo}</h1>
              <p className="lead">{this.props.idioma.editorial.jumbotron.subtitulo}</p>
              <hr className="my-4" />
              <p>
              {this.props.idioma.editorial.jumbotron.contenido}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <img
                src="/assets/img/quienesSomosEditorial/editorialUMaza.png"
                className="card-img-top"
                alt="Biblioteca Central"
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.idioma.editorial.card.titulo}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.card.subtitulo}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosEditorial/entregaOriginal.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.editorial.galeria.titulo1}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.galeria.contenido1}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-editorial-1"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosEditorial/evaluacionEditorial.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.editorial.galeria.titulo2}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.galeria.contenido2}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-editorial-2"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosEditorial/nivelElaboracion.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.editorial.galeria.titulo3}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.galeria.contenido3}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-editorial-3"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosEditorial/correccion.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.editorial.galeria.titulo4}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.galeria.contenido4}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-editorial-4"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosEditorial/diagramacion.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.editorial.galeria.titulo5}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.galeria.contenido5}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-editorial-5"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosEditorial/impresion.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.editorial.galeria.titulo6}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.galeria.contenido6}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-editorial-6"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosEditorial/encuadernacion.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.editorial.galeria.titulo7}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.galeria.contenido7}
                </p>
                <br></br>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-editorial-7"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosEditorial/venta.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.editorial.galeria.titulo8}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.galeria.contenido8}<br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-editorial-8"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosEditorial/editorial.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.editorial.galeria.titulo9}</h5>
                <p className="card-text">
                {this.props.idioma.editorial.galeria.contenido9}
                  <br />
                  <a
                    href="https://www.online.umaza.edu.ar/general/catalogo.asp"
                    title="Librería Online"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    target="_blank"
                    style={{
                      color: "#a21798",
                      fontWeight: "bold",
                      textDecoration: "none"
                    }}
                  >
                    Editorial ONLINE: Click
                  </a>
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-editorial-9"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-editorial-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src="/assets/img/quienesSomosEditorial/entregaOriginal.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  {this.props.idioma.principales.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-editorial-2"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src="/assets/img/quienesSomosEditorial/evaluacionEditorial.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  {this.props.idioma.principales.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-editorial-3"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src="/assets/img/quienesSomosEditorial/nivelElaboracion.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  {this.props.idioma.principales.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-editorial-4"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src="/assets/img/quienesSomosEditorial/correccion.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  {this.props.idioma.principales.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-editorial-5"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src="/assets/img/quienesSomosEditorial/diagramacion.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  {this.props.idioma.principales.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-editorial-6"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src="/assets/img/quienesSomosEditorial/impresion.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  {this.props.idioma.principales.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-editorial-7"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src="/assets/img/quienesSomosEditorial/encuadernacion.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  {this.props.idioma.principales.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-editorial-8"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src="/assets/img/quienesSomosEditorial/venta.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  {this.props.idioma.principales.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-editorial-9"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src="/assets/img/quienesSomosEditorial/editorial.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  {this.props.idioma.principales.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default QuienesSomosEditorial;