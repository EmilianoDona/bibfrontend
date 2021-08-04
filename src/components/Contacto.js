import React, { Component } from "react";
import "../css/contacto.css";
import { enviarEmailContacto } from "../api/enviarEmailApi";
class Contacto extends Component {
  apellidoRef = React.createRef();
  nombreRef = React.createRef();
  telefonoRef = React.createRef();
  emailRef = React.createRef();
  mensajeRef = React.createRef();

  state = {loading: false, alert: ""};
  alert = "";

  handleSubmit = async e => {
    e.preventDefault();
    const apellido = this.apellidoRef.current.value;
    const nombre = this.nombreRef.current.value;
    const telefono = this.telefonoRef.current.value;
    const email = this.emailRef.current.value;
    const mensaje = this.mensajeRef.current.value;
    
    let error = false;

    if (apellido == "") {
      error = true;
      this.setState({apellidoCn: "is-invalid"})
    } else {
      this.setState({apellidoCn: ""})
    }
    if (nombre == "") {
      error = true;
      this.setState({nombreCn: "is-invalid"})
    } else {
      this.setState({nombreCn: ""})
    }
    if (telefono == "") {
      error = true;
      this.setState({telefonoCn: "is-invalid"})
    } else {
      this.setState({telefonoCn: ""})
    }
    if (email == "") {
      error = true;
      this.setState({emailCn: "is-invalid"})
    } else {
      this.setState({emailCn: ""})
    }
    if (mensaje == "") {
      error = true;
      this.setState({mensajeCn: "is-invalid"})
    } else {
      this.setState({mensajeCn: ""})
    }

    if (error) {
      return;
    }

    this.setState({loading: true})

    const data = {
      apellido,
      nombre,
      telefono,
      email,
      mensaje
    };
    
    const response = await enviarEmailContacto(data);
    if(response.status == 200) {
      this.setState({alert: <div className="alert alert-success">{response.message}</div>})
    } else {
      this.setState({alert: <div className="alert alert-danger">{response.message}</div>})
    }
    this.setState({loading: false})
  };

  render() {
    return (
      <React.Fragment>

        <div className="card mb-3">
          <div className="row no-gutters">
            <div
              className="col-12 col-md-4 text-center font-weight-bold"
              style={{
                backgroundColor: "#a21798",
                color: "#fff",
                padding: "20px"
              }}
            >
              <span
                className="far fa-address-card"
                style={{ fontSize: "7rem", marginTop: "80px" }}
              />
              <p className="mt-3">{this.props.idioma.contacto.info.informacion}</p>
              <p className="mt-3">
                <span className="fa fa-envelope" /> {this.props.idioma.contacto.info.correo}
              </p>
              <p className="mt-3">
                <span className="fa fa-mobile" /> {this.props.idioma.contacto.info.telefono}
              </p>
            </div>
            <div className="col-12 col-md-8" style={{ padding: "50px" }}>
              <form onSubmit={this.handleSubmit} action="enviar.php" method="post">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="lastName">{this.props.idioma.contacto.datos.apellido}:&nbsp;*</label>
                    <input
                      type="apellido"
                      className={"form-control " + this.state.apellidoCn}
                      id="inputApellido"
                      placeholder={this.props.idioma.placeholder.apellido}
                      ref={this.apellidoRef}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">{this.props.idioma.contacto.datos.nombre}:&nbsp;*</label>
                    <input
                      type="nombre"
                      className={"form-control " + this.state.nombreCn}
                      id="inputNombre"
                      placeholder={this.props.idioma.placeholder.nombre}
                      ref={this.nombreRef}
                    />
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="phone">{this.props.idioma.contacto.datos.telefono}:</label>
                    <input
                      type="telefono"
                      className={"form-control " + this.state.telefonoCn}
                      id="inputTelefono"
                      placeholder={this.props.idioma.placeholder.telefono}
                      ref={this.telefonoRef}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">{this.props.idioma.contacto.datos.email}:&nbsp;*</label>
                    <input
                      type="email"
                      className={"form-control " + this.state.emailCn}
                      id="inputEmail"
                      placeholder={this.props.idioma.placeholder.email}
                      ref={this.emailRef}
                    />
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="message">{this.props.idioma.contacto.datos.mensaje}:&nbsp;*</label>
                    <textarea
                      className={"form-control " + this.state.mensajeCn}
                      id="validationTextarea"
                      placeholder={this.props.idioma.placeholder.mensaje}
                      ref={this.mensajeRef}
                    />
                  </div>
                </div>
                <div className="text-center">
                {this.state.alert}
                { !this.state.loading ? <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#a21798" }}
                    id="btnSend"
                  >
                    {this.props.idioma.principales.enviar}
                  </button> : ""}
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contacto;
