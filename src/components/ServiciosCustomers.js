import React, { Component } from 'react'
//importar la libreria axios
import axios from 'axios';
import Global from '../Global';

export default class ServiciosCustomers extends Component {
    //almacenamos en una variable la url del servicio
    urlCustomers = Global.urlCustomers;
    //tendremos un array con todos los customers del servicio
    state = {
        customers: []
    }
    //metodo para cargar todos los elementos customer
    //del servicio api en el array de state
    loadCustomers = () =>{
        //implementamos el metodo de peticion
        var request = "customers.json"
        //leemos el servio con el metodo get
        axios.get(this.urlCustomers + request).then(response =>{
            //console.log(response.data);
            this.setState({
                customers : response.data.results
            });
        });
    }
    //queremos cargar los customers al iniciar la pagina
    componentDidMount = () =>{
        this.loadCustomers();
    }
  render() {
    return (
      <div>
        <h1>ServiciosCustomers</h1>
        {
            this.state.customers.map((customer, index)=>{
                return(<h2 style={{color:"red"}} key={customer.id}>
                    {customer.contactName}
                </h2>)
            })
        }
        </div>
    )
  }
}
