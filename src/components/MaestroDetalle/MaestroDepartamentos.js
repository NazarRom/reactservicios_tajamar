import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import MaestroEmpleados from './MaestroEmpleados';

export default class MaestroDepartamentos extends Component {
    state = {
        option: [],
        status: false,
        idDepartamento: 0
    }
    cajaSelect = React.createRef();
    loadDepartamentos = () => {
        var url = Global.urlDepartamentos;
        axios.get(url).then(res => {
            this.setState({
                option: res.data,
                status: true
            })

        });
    }
    loadEmpleados = (e) =>{
        e.preventDefault();
        var aux = this.cajaSelect.current.value;
        this.setState({
            idDepartamento:aux
        });
    }
    componentDidMount = () => {
        this.loadDepartamentos();
    }
    render() {
        return (
            <div>
                <h1>
                    Departamentos
                </h1>
                <form onSubmit={this.loadEmpleados}>
                
                <select ref={this.cajaSelect}>
                    {this.state.status == true &&
                        (this.state.option.map((option, index) => {
                            return (<option key={index} value={option.Numero}>{option.Nombre}</option>)
                        })
                        )
                    }
                </select>
                <h2>Departamentos seleccionados {this.state.idDepartamento}</h2>
                <button>Ver</button>
                </form>
                {   this.state.idDepartamento != 0 &&
                    <MaestroEmpleados iddepartamento={this.state.idDepartamento}/>
                }
            </div>
        )
    }
}
