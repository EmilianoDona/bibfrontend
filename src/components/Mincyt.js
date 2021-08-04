import React, { Component } from "react";

class Mincyt extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-8 d-flex align-items-stretch">
            <div className="jumbotron">
              <h1 className="display-4">{this.props.idioma.principales.mincyt}</h1>
              <p className="lead">{this.props.idioma.editorial.jumbotron.subtitulo}</p>
              <hr className="my-4" />
              <p>
              {this.props.idioma.principales.tituloM}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/klM-g-rWNs4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              <div className="card-body">
                <h5 className="card-title text-center">MINCYT</h5>
                <p className="card-text">
       
                </p>
                <a
                href="https://drive.google.com/open?id=18n_HWlFYfsTEMDIvFW-TRXoA1d5wlxdN"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.tituloMincyt}
                className="btn btn-primary btn-block"
              >
            {this.props.idioma.principales.informacion}
              </a>
              </div>
              
          
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card mt-3">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/-WUVBXQ1154"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.principales.PER}</h5>
                <p className="card-text">

                  <br />
                  <br />
                  <br />
                </p>
                

                <a
                href="http://www.biblioteca.mincyt.gob.ar/recursos/index"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.iralapagina}
                className="btn btn-primary btn-block"
              >
             {this.props.idioma.principales.db}
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/sBqD7FT4WgA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.principales.EDU}</h5>
                <p className="card-text">
                  <br />
                  <br />
                  <br />
                </p>
                <a
                href="http://www.biblioteca.mincyt.gob.ar/recursos/index"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.iralapagina}
                className="btn btn-primary btn-block"
              >
             {this.props.idioma.principales.db}
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/b1fjAI55lf0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.principales.FYB}</h5>
                <p className="card-text">

                  <br />
                  <br />
                </p>
                <a
                href="http://www.biblioteca.mincyt.gob.ar/recursos/index"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.iralapagina}
                className="btn btn-primary btn-block"
              >
             {this.props.idioma.principales.db}
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card mt-3">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/mgC-36NzSKQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.principales.KIN}</h5>
                <p className="card-text">

                  <br />
                  <br />
                </p>
                <a
                href="http://www.biblioteca.mincyt.gob.ar/recursos/index"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.iralapagina}
                className="btn btn-primary btn-block"
              >
             {this.props.idioma.principales.db}
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/6M59JX7d4YE"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.principales.CEJ}</h5>
                <p className="card-text">

                  <br />
                  <br />
                </p>
                <a
                href="http://www.biblioteca.mincyt.gob.ar/recursos/index"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.iralapagina}
                className="btn btn-primary btn-block"
              >
             {this.props.idioma.principales.db}
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/P3x3a7Oj_2k"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.principales.ENO}</h5>
                <p className="card-text">
                  <br />
                  <br />
                  <br />
                </p>
                <a
                href="http://www.biblioteca.mincyt.gob.ar/recursos/index"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.iralapagina}
                className="btn btn-primary btn-block"
              >
             {this.props.idioma.principales.db}
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card mt-3">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/AbsLb7D3sxQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.principales.NUT}</h5>
                <p className="card-text">
                <br />
                <br />
                <br />
                </p>
         
                <a
                href="http://www.biblioteca.mincyt.gob.ar/recursos/index"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.iralapagina}
                className="btn btn-primary btn-block"
              >
             {this.props.idioma.principales.db}
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/qCK0Pkng51M"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.principales.ING}</h5>
                <p className="card-text">
                <br />
                <br />
                <br />
                </p>
                <a
                href="http://www.biblioteca.mincyt.gob.ar/recursos/index"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.iralapagina}
                className="btn btn-primary btn-block"
              >
             {this.props.idioma.principales.db}
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3">
            <iframe
              height="300"
              src="https://www.youtube.com/embed/1YD_Ok7-XXc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
              <div className="card-body text-center">
                <h5 className="card-title">{this.props.idioma.principales.VET}</h5>
                <p className="card-text">

                <br />
                <br />
                <br />
                </p>
                <a
                href="http://www.biblioteca.mincyt.gob.ar/recursos/index"
                target="_blank"
                style={{ color: "white", textDecoration: "none", backgroundColor:"#a21798"}}
                title={this.props.idioma.principales.iralapagina}
                className="btn btn-primary btn-block  xs"
              >
             {this.props.idioma.principales.db}
              </a>
              </div>
            </div>
          </div>
        </div>
        
       
      
        



      </React.Fragment>
    );
  }
}
export default Mincyt;