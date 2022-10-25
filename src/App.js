import "bootstrap/dist/css//bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle";

import logo from './logo.svg';
import './App.css';
import ServiciosCustomers from './components/ServiciosCustomers';
import BuscadorCustomers from './components/BuscadorCustomers';
import ServicioCoche from './components/ServicioCoche';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import MaestroDepartamentos from './components/MaestroDetalle/MaestroDepartamentos';
import MaestroEmpleados from './components/MaestroDetalle/MaestroEmpleados';
import TablaMultiplicar from './components/RutasParametros/TablaMultiplicar';
import Router from './components/Router';
import MenuRutas from './components/RutasParametros/MenuRutas';
function App() {
  return (
    <div className="App">
     {/* <ServiciosCustomers/> */}
     {/* <BuscadorCustomers/> */}
     {/* <ServicioCoche/> */}
     {/* <DepartamentosEmpleados/> */}
     {/* <MaestroDepartamentos/> */}
     <Router/>
     {/* <TablaMultiplicar numero="5"/>
     <TablaMultiplicar numero="21"/> */}

    </div>
  );
}

export default App;
