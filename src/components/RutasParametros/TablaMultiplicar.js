import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    //en este componente vamos a recibir props de numero
    constructor(props){
        super(props);
        console.log("Numero props " + props.numero)
    }
    state = {
        tabla:[]
    }
    generarTabla = () =>{
        var datos = [];
        for(var i = 1;i <= 10; i++){
            var op = parseInt(this.props.numero) * i;
            datos.push(op);
        }
        this.setState({
            tabla : datos
        });
    }
    componentDidUpdate = (oldProps) =>{
        if(oldProps.numero != this.props.numero){
            this.generarTabla();
        }
    }
    componentDidMount = () =>{
        this.generarTabla();
    }
    state = {
        tabla:[]
    }
  render() {
    return (
      <div>
        <h1>TablaMultiplicar</h1>
        <table className='table table-warning'>
            <tbody>
            {
                this.state.tabla.map((num, index)=>{
                    return(<tr key={index}><td>{num}</td></tr>)
                })
            }
            </tbody>
        </table>
        </div>
    )
  }
}
