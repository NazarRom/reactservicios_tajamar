import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
export default class BuscadorCustomers extends Component {
    cajaIdRef = React.createRef();
    state = {
        customer : {},
        status: false
    }
    buscarCustomer = (e) =>{
        e.preventDefault();
        //customers/ALFK.json
        var id = this.cajaIdRef.current.value;
        var request = "customers/" + id + ".json";
        var url = Global.urlCustomers + request;
        axios.get(url).then(res =>{
            this.setState({
                customer:res.data.customer,
                status: true
            });
        });
    }

  render() {
    return (
      <div>
        <h1>Buscador Api Customer</h1>
        <form onSubmit={this.buscarCustomer}>
            <label>Intorduce ID:</label>
            <input type="text" ref={this.cajaIdRef}/>
            <button>
                Buscar cliente
            </button>
        </form>
        {
            this.state.status == true &&
            (<div>
                <h1 style = {{color:"blue"}}>
                    Empresa : {this.state.customer.companyName}
                </h1>
                <h1>
                    Contacto : {this.state.customer.contactName}
                </h1>
                <h2>Cargo : {this.state.customer.contactTitle}</h2>
                <h2>Ciudad: {this.state.customer.city}</h2>
            </div>)
        }
        </div>
    )
  }
}
