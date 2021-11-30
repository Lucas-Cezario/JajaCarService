import React from "react";

//Importar componentes de tela
import RotasMain from "./rotas/rotasMain";

//bootstrap, estilos e scripts 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "./componentes/_estilos.css"

export default function App() {
    return (
        <RotasMain/>
    );
 
}
