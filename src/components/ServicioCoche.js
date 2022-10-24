import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
export default class ServicioCoche extends Component {
    cajaModelo = React.createRef();

    buscarCoches = (e) => {
        e.preventDefault();
        var coches = this.state.coches;
        var marca = this.cajaModelo.current.value.toLowerCase();
        var cochesfiltrados =
         coches.filter(car => car.marca.toLowerCase().includes(marca));
         this.setState({
            coches:cochesfiltrados
         })
    }

    state = {
        coches: [],
        status: false,
    }
    cargarCoche = (e) => {
        if(e != null){
        e.preventDefault();
        }
        var request = "/webresources/coches";
        var url = Global.urlCoches + request;
        axios.get(url).then(res => {
            console.log(res);
            this.setState({
                coches: res.data,
                status: true
            })
        });
    
    }
    
    componentDidMount = () => {
        this.cargarCoche();
    }
    render() {
        return (
            <div>
                <h1>Servicio Coches </h1>
                <h1> ola {this.state.marca}</h1>
                <form>
                    <label>Marca:</label>
                    <input type="text" ref={this.cajaModelo} />
                    <button onClick={this.buscarCoches}>Filtrar coche</button>
                    <button onClick={this.cargarCoche}>Cargar todos los coches</button>
                </form>
                <table border="1px">
                    <tbody>

                        {this.state.status == true &&
                            (this.state.coches.map((coche, index) => {
                                return (<tr>
                                    <td key={coche.idcoche}>{coche.marca}</td>
                                    <td key={index}>{coche.modelo}</td>
                                    <td key={coche.modelo}>{coche.conductor}</td>
                                    <td><img src={coche.imagen} style={{ height: "150px", width: "150px" }} /></td>
                                </tr>)
                            })
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
