import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li><NavLink to="/tabla/9">Tabla 9</NavLink>||
                        <a href='/tabla/9'>TABLA 9</a></li>

                    <li><NavLink to="/tabla/4">Tabla 4</NavLink>||
                        <a href='/tabla/4'>TABLA 4</a></li>

                    <li><NavLink to="/tabla/21">Tabla 21</NavLink>||
                        <a href='/tabla/21'>TABLA 21</a></li>

                    <li><NavLink to="/noexisto">Sin ruta mapeada</NavLink>||
                        <a href='/noexisto'>Sin ruta mapeada</a></li>
                </ul>
            </div>
        )
    }
}
