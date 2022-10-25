import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
export default class MaestroEmpleados extends Component {
    state = {
        empleados:[],
        status:false
    }
    loadEmepleados = () =>{
        var idDept = this.props.iddepartamento;
        var request = "/api/empleados/empleadosdepartamento/" + idDept;
        var url = Global.urlEmpleados + request;
        axios.get(url).then(res=>{
            this.setState({
                status:true,
                empleados: res.data
            })
        })
    }
    componentDidMount = () =>{
        this.loadEmepleados();
    }
    //este metodo hay que llamarlo con cuidado
    //siempre debemos comprobar el tipo de cambio
    //normalmente se utiliza con props
    //cuando otro componente nos ha cargado previamente
    //recibe un parametro, llamdado old props que indica 
    //el antiguo valor de props
    componentDidUpdate = (oldProps) =>{
        console.log("Actualizando" + this.props.iddepartamento);
        console.log("Old props" + oldProps.iddepartamento);
        //solamente realizaremos cambios en la pagina 
        //cuando los props sean diferentes
        if (this.props.iddepartamento != oldProps.iddepartamento){
            this.loadEmepleados();
        }

    }
  render() {
    return (
        <div>
            <h1>Maestro Empleados</h1>
            {
                this.state.status == true &&
                this.state.empleados.map((emp,index)=>{
                   return(<h3 key={emp.idEmpleado}>{emp.apellido}, {emp.oficio}</h3>) 
                })
            }
        </div>
    )
  }
}
