import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import  Header  from './Layout/Header';
import  Footer  from './Layout/Footer';
import Home  from './Home';
import QuienesSomosBiblioteca from './QuienesSomosBiblioteca';
import QuienesSomosEditorial from './QuienesSomosEditorial';
import QuienesSomosImprenta from './QuienesSomosImprenta';
import ContactoReservacion from './ContactoReservacion';
import Contacto from './Contacto';
import BibliotecasDigitales from './BibliotecasDigitales';
import Ingresos17 from './Ingresos17';
import Ingresos18 from './Ingresos18';
import Ingresos19 from './Ingresos19';
import HerramientasBibliotecarias from './HerramientasBibliotecarias';
import DiaNutricionista from './DiaNutricionista';
import FainBinda from './FainBinda';
import ObrasPostales from './ObrasPostales';
import MaritaOliva from './MaritaOliva';
import FechasPatrias from './FechasPatrias';
import JornadasInvestigacion from './JornadasInvestigacion';
import FeriaIdeas from './FeriaIdeas';
import ExposicionCuadros from './ExposicionCuadros';
import Formularios from './Formularios';
import dataIdiomas from '../data/db.json';
import EnfermeriaMedicina from './EnfermeriaMedicina';
import Mincyt from './Mincyt';
class Router extends Component {

    state = {
        idiomas: {},
        idiomaActual: {}
    }

    componentWillMount() {
        this.obtenerIdiomas();
    }

    obtenerIdiomas() {
        const idiomas = dataIdiomas;
        this.setState({idiomas, idiomaActual: idiomas["es"]});
    }

    cambiarIdioma = (idiomaActual) => {
        this.setState({idiomaActual: this.state.idiomas[idiomaActual]});
    }

    render() {
        return (
            <BrowserRouter>
                <Header idioma={this.state.idiomaActual}></Header>
                    <div className="container mt-5 mb-5">
                        <Switch>
                            <Route exact path="/" render={() => (
                                <Home idioma={this.state.idiomaActual}></Home>
                            )}></Route>
                            <Route exact path="/quienes-somos/biblioteca" render={() => (
                                <QuienesSomosBiblioteca idioma={this.state.idiomaActual}></QuienesSomosBiblioteca>
                            )}></Route>
                            <Route exact path="/quienes-somos/editorial" render={() => (
                                <QuienesSomosEditorial idioma={this.state.idiomaActual}></QuienesSomosEditorial>
                            )}></Route>
                            <Route exact path="/quienes-somos/imprenta" render={() => (
                                <QuienesSomosImprenta idioma={this.state.idiomaActual}></QuienesSomosImprenta>
                            )}></Route>
                            <Route exact path="/reservacion" render={() => (
                                <ContactoReservacion idioma={this.state.idiomaActual}></ContactoReservacion>
                            )}></Route>
                            <Route exact path="/contacto" render={() => (
                                <Contacto idioma={this.state.idiomaActual}></Contacto>
                            )}></Route>
                            <Route exact path="/bibliotecas-digitales" render={() => (
                                <BibliotecasDigitales idioma={this.state.idiomaActual}></BibliotecasDigitales>
                            )}></Route>
                            <Route exact path="/ingresos17" render={() => (
                                <Ingresos17 idioma={this.state.idiomaActual}></Ingresos17>
                            )}></Route>
                            <Route exact path="/ingresos18" render={() => (
                                <Ingresos18 idioma={this.state.idiomaActual}></Ingresos18>
                            )}></Route>
                            <Route exact path="/ingresos19" render={() => (
                                <Ingresos19 idioma={this.state.idiomaActual}></Ingresos19>
                            )}></Route>
                            <Route exact path="/herramientas-bibliotecarias" render={() => (
                                <HerramientasBibliotecarias idioma={this.state.idiomaActual}></HerramientasBibliotecarias>
                            )}></Route>
                            <Route exact path="/galeria/nutricion" render={() => (
                                <DiaNutricionista idioma={this.state.idiomaActual}></DiaNutricionista>
                            )}></Route>
                            <Route exact path="/galeria/fainbinda" render={() => (
                                <FainBinda idioma={this.state.idiomaActual}></FainBinda>
                            )}></Route>
                            <Route exact path="/galeria/obraspostales" render={() => (
                                <ObrasPostales idioma={this.state.idiomaActual}></ObrasPostales>
                            )}></Route>
                            <Route exact path="/galeria/maritaoliva" render={() => (
                                <MaritaOliva idioma={this.state.idiomaActual}> </MaritaOliva>
                            )}></Route>
                            <Route exact path="/galeria/fechaspatrias" render={() => (
                                <FechasPatrias idioma={this.state.idiomaActual}></FechasPatrias>
                            )}></Route>
                            <Route exact path="/galeria/jornadasinvestigacion" render={() => (
                                <JornadasInvestigacion idioma={this.state.idiomaActual}></JornadasInvestigacion>
                            )}></Route>
                            <Route exact path="/galeria/feriaideas" render={() => (
                                <FeriaIdeas idioma={this.state.idiomaActual}></FeriaIdeas>
                            )}></Route>
                            <Route exact path="/galeria/exposicioncuadros" render={() => (
                                <ExposicionCuadros idioma={this.state.idiomaActual}></ExposicionCuadros>
                            )}></Route>
                            <Route exact path="/formularios" render={() => (
                            <Formularios idioma={this.state.idiomaActual}></Formularios>
                            )}></Route>
                            <Route exact path="/pandemia" render={() => (
                            <EnfermeriaMedicina idioma={this.state.idiomaActual}></EnfermeriaMedicina>
                            )}></Route>
                            <Route exact path="/mincyt" render={() => (
                            <Mincyt idioma={this.state.idiomaActual}></Mincyt>
                            )}></Route>


                        </Switch>   
                    </div> 
                <Footer cambiarIdioma={this.cambiarIdioma} idioma={this.state.idiomaActual}></Footer>
            </BrowserRouter>
        );
    }
}

export default Router;