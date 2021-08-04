import React, { Component } from "react";
import "../css/contacto.css";
import { enviarEmailContactoReservacion } from "../api/enviarEmailApi";
class ContactoReservacion extends Component {
  apellidoRef = React.createRef();
  nombreRef = React.createRef();
  dniRef = React.createRef();
  telefonoRef = React.createRef();
  emailRef = React.createRef();
  mensajeRef = React.createRef();

  state = {loading: false, alert: ""};
  alert = "";

  handleSubmit = async e => {
    e.preventDefault();
    const apellido = this.apellidoRef.current.value;
    const nombre = this.nombreRef.current.value;
    const dni = this.dniRef.current.value;
    const email = this.emailRef.current.value;
    const telefono = this.telefonoRef.current.value;
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

    if (dni == "") {
      error = true;
      this.setState({dniCn: "is-invalid"})
    } else {
      this.setState({dniCn: ""})
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
      dni,
      telefono,
      email,
      mensaje
    };

    const response = await enviarEmailContactoReservacion(data);
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
        {/* <div className="card mb-3">
        <iframe style={{width:"100%", height:"100%"}}
        src="https://www.youtube.com/embed/L6-ZaMQT444"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        </div> */}

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
                className="fas fa-phone-square"
                style={{ fontSize: "7rem", marginTop: "100px" }}
              />
              <p className="mt-3">{this.props.idioma.reservacion.info.informacion}</p>
              <p className="mt-3">
                <span className="fa fa-envelope" /> {this.props.idioma.reservacion.info.correo}
              </p>
              <p className="mt-3">
                <span className="fa fa-mobile" /> {this.props.idioma.reservacion.info.telefono}
              </p>

            </div>
            <div className="col-12 col-md-8" style={{ padding: "60px" }}>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="lastName">{this.props.idioma.reservacion.datos.apellido}&nbsp;: *</label>
                    <input
                      type="text"
                      className={"form-control " + this.state.apellidoCn}
                      id="inputApellido"
                      name= "apellido"
     
                      placeholder={this.props.idioma.placeholder.apellido}
                      ref={this.apellidoRef}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">{this.props.idioma.reservacion.datos.nombre}&nbsp;: *</label>
                    <input
                      type="text"
                      className={"form-control " + this.state.nombreCn}
                      id="name"
                      name="nombre"
  
                      placeholder={this.props.idioma.placeholder.nombre}
                      ref={this.nombreRef}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="documents">{this.props.idioma.reservacion.datos.dni}&nbsp;: *</label>
                    <input
                      type="text"
                      className={"form-control " + this.state.dniCn}
                      id="documents"
                      name="documento"

                      placeholder={this.props.idioma.placeholder.dni}
                      ref={this.dniRef}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">{this.props.idioma.reservacion.datos.email}&nbsp;: *</label>
                    <input
                      type="text"
                      className={"form-control " + this.state.emailCn}
                      id="email"
                      name="correo"

                      placeholder={this.props.idioma.placeholder.email}
                      ref={this.emailRef}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="phone">{this.props.idioma.reservacion.datos.telefono}&nbsp;: *</label>
                    <input
                      type="text"
                      className={"form-control " + this.state.telefonoCn}
                      id="phone"
                      name="telefono"
   
                      placeholder={this.props.idioma.placeholder.telefono}
                      ref={this.telefonoRef}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputArea">
                    {this.props.idioma.reservacion.datos.area}
                    </label>
                    <select className="custom-select mr-sm-2" id="inputArea" name="area">
                      <option defaultValue>{this.props.idioma.reservacion.datos.area2}:</option>
                      <option value="1">{this.props.idioma.opciones.opcion1}</option>
                      <option value="2">{this.props.idioma.opciones.opcion2}</option>
                      <option value="3">{this.props.idioma.opciones.opcion3}</option>
                      <option value="4">{this.props.idioma.opciones.opcion4}</option>
                      <option value="5">{this.props.idioma.opciones.opcion5}</option>
                      <option value="6">{this.props.idioma.opciones.opcion6}</option>
                      <option value="7">{this.props.idioma.opciones.opcion7}</option>
                      <option value="8">{this.props.idioma.opciones.opcion8}</option>
                      <option value="9">{this.props.idioma.opciones.opcion9}</option>
                      <option value="10">{this.props.idioma.opciones.opcion10}</option>
                      <option value="11">{this.props.idioma.opciones.opcion11}</option>
                      <option value="12">{this.props.idioma.opciones.opcion12}</option>
                      <option value="13">{this.props.idioma.opciones.opcion13}</option>
                      <option value="14">{this.props.idioma.opciones.opcion14}</option>
                      <option value="15">{this.props.idioma.opciones.opcion15}</option>
                      <option value="16">{this.props.idioma.opciones.opcion16}</option>
                      <option value="17">{this.props.idioma.opciones.opcion17}</option>
                      <option value="18">{this.props.idioma.opciones.opcion18}</option>
                      <option value="19">{this.props.idioma.opciones.opcion19}</option>
                      <option value="20">{this.props.idioma.opciones.opcion20}</option>
                      <option value="21">{this.props.idioma.opciones.opcion21}</option>
                      <option value="22">{this.props.idioma.opciones.opcion22}</option>
                      <option value="23">{this.props.idioma.opciones.opcion23}</option>
                      <option value="24">{this.props.idioma.opciones.opcion24}</option>
                      <option value="25">{this.props.idioma.opciones.opcion25}</option>
                      <option value="26">{this.props.idioma.opciones.opcion26}</option>
                      <option value="27">{this.props.idioma.opciones.opcion27}</option>
                      <option value="28">{this.props.idioma.opciones.opcion28}</option>
                      <option value="29">{this.props.idioma.opciones.opcion29}</option>
                      <option value="30">{this.props.idioma.opciones.opcion30}</option>
                      <option value="31">{this.props.idioma.opciones.opcion31}</option>
                      <option value="32">{this.props.idioma.opciones.opcion32}</option>
                      <option value="33">{this.props.idioma.opciones.opcion33}</option>
                      <option value="34">{this.props.idioma.opciones.opcion34}</option>
                      <option value="35">{this.props.idioma.opciones.opcion35}</option>
                      <option value="36">{this.props.idioma.opciones.opcion36}</option>
                      <option value="37">{this.props.idioma.opciones.opcion37}</option>
                      <option value="38">{this.props.idioma.opciones.opcion38}</option>
                      <option value="39">{this.props.idioma.opciones.opcion39}</option>
                      <option value="40">{this.props.idioma.opciones.opcion40}</option>
                      <option value="41">{this.props.idioma.opciones.opcion41}</option>
                      <option value="42">{this.props.idioma.opciones.opcion42}</option>
                      <option value="43">{this.props.idioma.opciones.opcion43}</option>
                      <option value="44">{this.props.idioma.opciones.opcion44}</option>
                      <option value="45">{this.props.idioma.opciones.opcion45}</option>
                      <option value="46">{this.props.idioma.opciones.opcion46}</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="inputHoraEntrada">{this.props.idioma.reservacion.datos.hentrada}:</label>
                    <select
                      className="custom-select mr-sm-2"
                      id="inputHoraEntrada"
                      name="horaEntrada"
                    >
                      <option value="1">08:00 hs</option>
                      <option value="2">09:00 hs</option>
                      <option value="3">10:00 hs</option>
                      <option value="4">11:00 hs</option>
                      <option value="5">12:00 hs</option>
                      <option value="6">13:00 hs</option>
                      <option value="7">14:00 hs</option>
                      <option value="8">15:00 hs</option>
                      <option value="9">16:00 hs</option>
                      <option value="10">17:00 hs</option>
                      <option value="11">18:00 hs</option>
                      <option value="12">19:00 hs</option>
                      <option value="13">20:00 hs</option>
                      <option value="14">21:00 hs</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputHoraSalida">{this.props.idioma.reservacion.datos.hsalida}: </label>
                    <select
                      className="custom-select mr-sm-2"
                      id="inputHoraSalida"
                      name="horaSalida"
                    
                    >
                      <option value="1">21:00 hs</option>
                      <option value="2">20:00 hs</option>
                      <option value="3">19:00 hs</option>
                      <option value="4">18:00 hs</option>
                      <option value="5">17:00 hs</option>
                      <option value="6">16:00 hs</option>
                      <option value="7">15:00 hs</option>
                      <option value="8">14:00 hs</option>
                      <option value="9">13:00 hs</option>
                      <option value="10">12:00 hs</option>
                      <option value="11">11:00 hs</option>
                      <option value="12">10:00 hs</option>
                      <option value="13">09:00 hs</option>
                      <option value="14">08:00 hs</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFecha">{this.props.idioma.reservacion.datos.diareservar}&nbsp;:*</label>
                    <input name="fecha" type="date" id="inputFecha" className="form-control" name="fecha"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="message">{this.props.idioma.reservacion.datos.mensaje}&nbsp;: *</label>
                    <textarea
                      className={"form-control " + this.state.mensajeCn}
                      id="message"
                      name="mensaje"
                      placeholder={this.props.idioma.placeholder.mensaje}
                      ref={this.mensajeRef}
                    />
                  </div>
                </div>
                <br />
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#a21798" }}
                  >
                    {this.props.idioma.principales.enviar}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ContactoReservacion;
