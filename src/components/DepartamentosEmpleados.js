import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class DepartamentosEmpleados extends Component {
    state = {
        option: [],
        status: false,
        empleados:[]
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
        var url = "https://apiempleadosfullstack.azurewebsites.net/";
        var request = "api/Empleados/EmpleadosDepartamento/";
        var aux = this.cajaSelect.current.value;
        
        axios.get(url + request + aux).then(res=>{
            this.setState({
                empleados:res.data
            })
        })

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
                <button>Ver</button>
                </form>
                <ul>
                    {
                        this.state.empleados.map((empleado,index)=>{
                            return(<li key={index}>{empleado.apellido}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
