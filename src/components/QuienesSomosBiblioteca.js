import React, { Component } from "react";

class QuienesSomosBiblioteca extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-8 d-flex align-items-stretch">
            <div className="jumbotron">
              <h1 className="display-4">{this.props.idioma.biblioteca.jumbotron.titulo}</h1>
              <p className="lead">{this.props.idioma.biblioteca.jumbotron.subtitulo}</p>
              <hr className="my-4" />
              <p>
              {this.props.idioma.biblioteca.jumbotron.contenido}
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card">
              <img
                src="/assets/img/quienesSomosBiblioteca/inicio.jpg"
                className="card-img-top"
                alt="Biblioteca Central"
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.idioma.biblioteca.card.titulo}</h5>
                <p className="card-text">
                {this.props.idioma.biblioteca.card.subtitulo}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosBiblioteca/mostrador.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.biblioteca.galeria.titulo1}</h5>
                <p className="card-text">
                {this.props.idioma.biblioteca.galeria.contenido1}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-biblioteca-1"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosBiblioteca/salaParlante.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.biblioteca.galeria.titulo2}</h5>
                <p className="card-text">
                {this.props.idioma.biblioteca.galeria.contenido2}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-biblioteca-2"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosBiblioteca/salaSilenciosa.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.biblioteca.galeria.titulo3}</h5>
                <p className="card-text">
                {this.props.idioma.biblioteca.galeria.contenido3}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-biblioteca-3"
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
                src="/assets/img/quienesSomosBiblioteca/salaInternetAlumnos.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.biblioteca.galeria.titulo4}</h5>
                <p className="card-text">
                {this.props.idioma.biblioteca.galeria.contenido4}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-biblioteca-4"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosBiblioteca/salaInternetDocentes.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.biblioteca.galeria.titulo5}</h5>
                <p className="card-text">
                {this.props.idioma.biblioteca.galeria.contenido5}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-biblioteca-5"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/quienesSomosBiblioteca/salaCuyana.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.biblioteca.galeria.titulo6}</h5>
                <p className="card-text">
                {this.props.idioma.biblioteca.galeria.contenido6}
                  <br />
                  <br />
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-biblioteca-6"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modales */}

        <div
          className="modal fade"
          id="modal-biblioteca-1"
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
                  src="/assets/img/quienesSomosBiblioteca/mostrador.jpg"
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
          id="modal-biblioteca-2"
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
                  src="/assets/img/quienesSomosBiblioteca/salaParlante.jpg"
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
          id="modal-biblioteca-3"
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
                  src="/assets/img/quienesSomosBiblioteca/salaSilenciosa.jpg"
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
          id="modal-biblioteca-4"
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
                  src="/assets/img/quienesSomosBiblioteca/salaInternetAlumnos.jpg"
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
          id="modal-biblioteca-5"
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
                  src="/assets/img/quienesSomosBiblioteca/salaInternetDocentes.jpg"
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
          id="modal-biblioteca-6"
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
                  src="/assets/img/quienesSomosBiblioteca/salaCuyana.jpg"
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
export default QuienesSomosBiblioteca;