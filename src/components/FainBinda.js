import React, { Component } from "react";

class FainBinda extends Component {
  render() {
    return (
      <div>
        <div className="row mt-3">
          {/*Inicio Imagen*/}
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/FainBinda/01.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-fain-1"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          {/*Fin Imagen*/}
          {/*Inicio Imagen*/}
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/FainBinda/02.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-fain-2"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          {/*Fin Imagen*/}
          {/*Inicio Imagen*/}
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/FainBinda/03.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-fain-3"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          {/*Fin Imagen*/}
        </div>
        <div className="row mt-3">
          {/* Inicio Imagen */}
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/FainBinda/04.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-fain-4"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          {/* Fin Imagen */}
          {/*Inicio Imagen*/}
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/FainBinda/05.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-fain-5"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          {/*Fin Imagen*/}
          {/*Inicio Imagen*/}
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/FainBinda/06.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-fain-6"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          {/*Fin Imagen*/}
        </div>
        <div className="row mt-3">
          {/* Inicio Imagen */}
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/FainBinda/07.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-fain-7"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          {/* Fin Imagen */}
          {/*Inicio Imagen*/}
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/FainBinda/08.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-fain-8"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          {/*Fin Imagen*/}
          {/*Inicio Imagen*/}
          <div className="col-md-4">
            <div className="card mt-3">
              <img
                src="/assets/img/FainBinda/09.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#a21798" }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-fain-9"
                >
                  {this.props.idioma.principales.imagen}
                </button>
              </div>
            </div>
          </div>
          {/*Fin Imagen*/}
        </div>

        {/* Modales  */}
        {/*Inicio Modal*/}
        <div
          className="modal fade"
          id="modal-fain-1"
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
                {/* Inicio Imagen Modal*/}
                <img
                  src="/assets/img/FainBinda/01.jpg"
                  className="card-img-top"
                  alt="..."
                />
                {/* Fin Imagen Modal*/}
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
        {/* Fin Modal */}

        {/*Inicio Modal*/}
        <div
          className="modal fade"
          id="modal-fain-2"
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
                {/* Inicio Imagen Modal*/}
                <img
                  src="/assets/img/FainBinda/02.jpg"
                  className="card-img-top"
                  alt="..."
                />
                {/* Fin Imagen Modal*/}
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
        {/* Fin Modal */}
        {/*Inicio Modal*/}
        <div
          className="modal fade"
          id="modal-fain-3"
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
                {/* Inicio Imagen Modal*/}
                <img
                  src="/assets/img/FainBinda/03.jpg"
                  className="card-img-top"
                  alt="..."
                />
                {/* Fin Imagen Modal*/}
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
        {/* Fin Modal */}
        {/*Inicio Modal*/}
        <div
          className="modal fade"
          id="modal-fain-4"
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
                {/* Inicio Imagen Modal*/}
                <img
                  src="/assets/img/FainBinda/04.jpg"
                  className="card-img-top"
                  alt="..."
                />
                {/* Fin Imagen Modal*/}
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
        {/* Fin Modal */}
        {/*Inicio Modal*/}
        <div
          className="modal fade"
          id="modal-fain-5"
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
                {/* Inicio Imagen Modal*/}
                <img
                  src="/assets/img/FainBinda/05.jpg"
                  className="card-img-top"
                  alt="..."
                />
                {/* Fin Imagen Modal*/}
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
        {/* Fin Modal */}
        {/*Inicio Modal*/}
        <div
          className="modal fade"
          id="modal-fain-6"
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
                {/* Inicio Imagen Modal*/}
                <img
                  src="/assets/img/FainBinda/06.jpg"
                  className="card-img-top"
                  alt="..."
                />
                {/* Fin Imagen Modal*/}
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
        {/* Fin Modal */}
        {/*Inicio Modal*/}
        <div
          className="modal fade"
          id="modal-fain-7"
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
                {/* Inicio Imagen Modal*/}
                <img
                  src="/assets/img/FainBinda/07.jpg"
                  className="card-img-top"
                  alt="..."
                />
                {/* Fin Imagen Modal*/}
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
        {/* Fin Modal */}
        {/*Inicio Modal*/}
        <div
          className="modal fade"
          id="modal-fain-8"
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
                {/* Inicio Imagen Modal*/}
                <img
                  src="/assets/img/FainBinda/08.jpg"
                  className="card-img-top"
                  alt="..."
                />
                {/* Fin Imagen Modal*/}
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
        {/* Fin Modal */}
        {/*Inicio Modal*/}
        <div
          className="modal fade"
          id="modal-fain-9"
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
                {/* Inicio Imagen Modal*/}
                <img
                  src="/assets/img/FainBinda/09.jpg"
                  className="card-img-top"
                  alt="..."
                />
                {/* Fin Imagen Modal*/}
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
        {/* Fin Modal */}
      </div>
    );
  }
}
export default FainBinda;
