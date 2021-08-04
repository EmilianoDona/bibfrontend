import React, { Component } from "react";

class Home extends Component {
  render() {
    return (

      
      <div className="">
          
          <div className="jumbotron jumbotron-fluid">
          <div className="container">
          <h1
              style={{
                color:"black",
                fontWeight: "bold",
                fontSize:"30px",
                textAlign:"center"
              }}
              >{this.props.idioma.principales.importante}</h1>
            <h1
              className="display-4"
              style={{
                textAlign: "center",
                color: "#a21798",
                fontWeight: "bold",
                fontSize:"30px",
                marginTop:"-35px"
              }}
            >

            <br/>
              {this.props.idioma.principales.manualUsuario}
              <br/>

              <a
                href="https://drive.google.com/file/d/1gyxtFA282TSmxOFftZuMmArUplhVMbv_/view"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"red", marginTop:"30px"}}
                
                className="btn btn-primary "
              >
                {this.props.idioma.principales.clic}
                </a>
            </h1>
          </div>
        </div>
        <div className="row" style={{marginTop:'40px'}}>
          <div className="col-12 col-md-8 d-flex align-items-stretch">
            <div className="jumbotron">
              <h2 className="display-4">
                {this.props.idioma.home.jumbotron.titulo}
              </h2>
              <div
                style={{ fontWeight: "bold", fontSize: "25px", color: "black" }}
              >
                <p>{this.props.idioma.home.jumbotron.subtitulo}</p>
              </div>
              <hr className="my-4" />
              <p>{this.props.idioma.home.jumbotron.contenido}</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <img
                src="/assets/img/libro.jpg"
                className="card-img-top"
                alt="Biblioteca Central"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {this.props.idioma.home.card.titulo}
                </h5>
                <div style={{ fontWeight: "bold" }}>
                  {this.props.idioma.home.card.subtitulo}
                </div>
                <br />
                <p className="card-text">
                  {this.props.idioma.home.card.coordinacion}
                </p>
              </div>
            </div>
          </div>
        </div>
      
        <div className="container" style={{marginTop:'50px'}}>
            <h1
              className="display-4"
              style={{
                textAlign: "center",
                color: "#a21798",
                fontWeight: "bold"
              }}
            >
              {this.props.idioma.home.video.principal}
            </h1>
          </div>
        <div className="row">
          <div className="col-sm">
            <h3 align="center">
              <center>
                <div className="titulo">
                  <h3>{this.props.idioma.home.video.titulo1}</h3>
                </div>
              </center>
            </h3>
            &nbsp;
            <iframe
              width="300"
              height="315"
              src="https://www.youtube.com/embed/uuAdofSUJX0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="col-sm">
            <h4 align="center">
              <div className="titulo">
                <h3>{this.props.idioma.home.video.titulo2}</h3>
              </div>
            </h4>
            <iframe
              width="300"
              height="315"
              src="https://www.youtube.com/embed/4hUXEmtKPrA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />{" "}
          </div>

          <div className="col-sm">
            <h3 align="center">
              <center>
                <div className="titulo">
                  <h3>{this.props.idioma.home.video.titulo3}</h3>
                </div>
              </center>
            </h3>

            <iframe
              width="300"
              height="315"
              src="https://www.youtube.com/embed/fG_TtBxM4Ok"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <br />
        <br />

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1
              className="display-4"
              style={{
                textAlign: "center",
                color: "#a21798",
                fontWeight: "bold"
              }}
            >
              {this.props.idioma.home.ultimasnovedades.cartel}
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-interval="10000">
                    <img
                      src="/assets/img/pic1.jpg"
                      style={{ width: "19.88rem", height: "36rem" }}
                      className="d-block w-100"
                      alt="Imágen no disponible"
                    />
                  </div>
                  <div className="carousel-item" data-interval="2000">
                    <img
                      src="/assets/img/pic2.jpg"
                      style={{ width: "19.88rem", height: "36rem" }}
                      className="d-block w-100"
                      alt="Imágen no disponible"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/img/pic3.jpg"
                      style={{ width: "19.88rem", height: "36rem" }}
                      className="d-block w-100"
                      alt="Imágen no disponible"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleInterval"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleInterval"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1
              className="display-4"
              style={{
                textAlign: "center",
                color: "#a21798",
                fontWeight: "bold"
              }}
            >
              {this.props.idioma.home.noticias.titulo}
              <br />
              <br />
            </h1>
            <div className="lead">
              {/* Sección Noticias */}
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    {/* Noticias: Feria Internacional del Libro */}
                    <a
                      className="btn btn-primary"
                      style={{ backgroundColor: "#a21798", width: "320px" }}
                      data-toggle="collapse"
                      href="#collapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      title="Clic para abrir"
                    >
                      {this.props.idioma.home.noticias.noticia10.fecha}
                      <br />
                      {this.props.idioma.home.noticias.noticia10.titulo}
                    </a>
                    <div className="collapse" id="collapseExample1">
                      <div className="card card-body">
                        {this.props.idioma.home.noticias.noticia10.descripcion}
                        <a
                          href="http://sideventos.uncu.edu.ar/eventos/evento/?idevento=12"
                          target="_blank"
                          style={{ color: "#a21798", fontWeight: "bold" }}
                        >
                          Inscripción: clic aquí
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    {/* Noticias: Introducción Curso ALFIN */}
                    <a
                      className="btn btn-primary"
                      style={{ backgroundColor: "#a21798", width: "320px" }}
                      data-toggle="collapse"
                      href="#collapseExample2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      title="Clic para abrir"
                    >
                      {this.props.idioma.home.noticias.noticia11.fecha}
                      <br />
                      {this.props.idioma.home.noticias.noticia11.titulo}
                    </a>
                    <div className="collapse" id="collapseExample2">
                      <div className="card card-body">
                        {this.props.idioma.home.noticias.noticia11.descripcion}
                        <a
                          href="http://www.cultura.mendoza.gov.ar/feria-del-libro-2019/"
                          target="_blank"
                          style={{ color: "#a21798", fontWeight: "bold" }}
                        >
                          Clic para acceder
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    {/* Noticias: DONACIÓN DE SANGRE */}
                    <a
                      className="btn btn-primary"
                      style={{ backgroundColor: "#a21798", width: "320px" }}
                      data-toggle="collapse"
                      href="#collapseExample3"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      title="Clic para abrir"
                    >
                      {this.props.idioma.home.noticias.noticia1.fecha}
                      <br />
                      {this.props.idioma.home.noticias.noticia1.titulo}
                    </a>
                    <div className="collapse" id="collapseExample3">
                      <div className="card card-body">
                        {this.props.idioma.home.noticias.noticia1.descripcion}
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-sm">
                    {/* Noticias: Reunión Plenaria RADBU */}
                    <a
                      className="btn btn-primary"
                      style={{ backgroundColor: "#a21798", width: "320px" }}
                      data-toggle="collapse"
                      href="#collapseExample7"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      title="Clic para abrir"
                    >
                      {this.props.idioma.home.noticias.noticia4.fecha}
                      <br />
                      {this.props.idioma.home.noticias.noticia4.titulo}
                    </a>
                    <div className="collapse" id="collapseExample7">
                      <div className="card card-body">
                        {this.props.idioma.home.noticias.noticia4.descripcion}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    {/* Noticias: Incorporación de RADBU */}
                    <a
                      className="btn btn-primary"
                      style={{ backgroundColor: "#a21798", width: "320px" }}
                      data-toggle="collapse"
                      href="#collapseExample8"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      title="Clic para abrir"
                    >
                      {this.props.idioma.home.noticias.noticia5.fecha}
                      <br />
                      {this.props.idioma.home.noticias.noticia5.titulo}
                    </a>
                    <div className="collapse" id="collapseExample8">
                      <div className="card card-body">
                        {this.props.idioma.home.noticias.noticia5.descripcion}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    {/* Noticias: ENTREVISTA ANA MARÍA BENINGAZZA */}
                    <a
                      className="btn btn-primary"
                      style={{ backgroundColor: "#a21798", width: "320px" }}
                      data-toggle="collapse"
                      href="#collapseExample9"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      title="Clic para abrir"
                    >
                      {this.props.idioma.home.noticias.noticia6.fecha}
                      <br />
                      {this.props.idioma.home.noticias.noticia6.titulo}
                    </a>
                    <div className="collapse" id="collapseExample9">
                      <div className="card card-body">
                        {this.props.idioma.home.noticias.noticia6.descripcion}
                      </div>
                    </div>
                  </div>
                </div>

                <br />
                <br />

                <div className="row">
                  <div className="col-sm">
                    {/* Noticias: Día del Bibliotecario */}
                    <a
                      className="btn btn-primary"
                      style={{ backgroundColor: "#a21798", width: "320px" }}
                      data-toggle="collapse"
                      href="#collapseExample4"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      title="Clic para abrir"
                    >
                      {this.props.idioma.home.noticias.noticia7.fecha}
                      <br />
                      {this.props.idioma.home.noticias.noticia7.titulo}
                    </a>
                    <div className="collapse" id="collapseExample4">
                      <div className="card card-body">
                        {this.props.idioma.home.noticias.noticia7.descripcion}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    {/* Noticias: Diplomatura RADBU */}
                    <a
                      className="btn btn-primary"
                      style={{ backgroundColor: "#a21798", width: "320px" }}
                      data-toggle="collapse"
                      href="#collapseExample5"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      title="Clic para abrir"
                    >
                      {this.props.idioma.home.noticias.noticia8.fecha}
                      <br />
                      {this.props.idioma.home.noticias.noticia8.titulo}
                    </a>
                    <div className="collapse" id="collapseExample5">
                      <div className="card card-body">
                        {this.props.idioma.home.noticias.noticia8.descripcion}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    {/* Noticias: REPOSITORIO DIGITAL */}
                    <a
                      className="btn btn-primary"
                      style={{ backgroundColor: "#a21798", width: "320px" }}
                      data-toggle="collapse"
                      href="#collapseExample6"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      title="Clic para abrir"
                    >
                      {this.props.idioma.home.noticias.noticia9.fecha}
                      <br />
                      {this.props.idioma.home.noticias.noticia9.titulo}
                    </a>
                    <div className="collapse" id="collapseExample6">
                      <div className="card card-body">
                        {this.props.idioma.home.noticias.noticia9.descripcion}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fin Sección Noticias */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
