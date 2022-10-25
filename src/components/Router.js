import React, { Component } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Home from './RutasParametros/Home';
import PageNotFound from './RutasParametros/PageNotFound';
import TablaMultiplicar from './RutasParametros/TablaMultiplicar';
import MenuRutas from './RutasParametros/MenuRutas';
export default class Router extends Component {
  render() {
    //esta funcion cambia los parametros dinamicamente
    //y permite capturar los parametros de una ruta
    function TablaMultiplicarElement() {
           var {minumero} = useParams();
           //devolvemos la etiqueta componente con
           //sus props dinamicos
           return <TablaMultiplicar numero={minumero}/>
    }
    return (
      <div>
        <BrowserRouter>
        <MenuRutas/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tabla/:minumero' element={<TablaMultiplicarElement/>}/>
        {/* Rutas que no existan  
            se utiliza el asterisco * en path
            y debe ser el ultimo <Route/>
            que pongamos
        */}
        <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
