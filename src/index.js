import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

/*

EJEMPLO SIN JSX

const root = document.getElementById("root")

//const elemento = React.createElement(componente, propiedades, hijos)

const elemento = React.createElement("h1", { className: "saludo" }, "Hola Mundo")

ReactDOM.render(elemento, root);
*/


//Ejemplo con JSX
/*
const root = document.getElementById("root")

ReactDOM.render(<h1 className="saludos">Hola Mundo</h1>, root);
*/

const root = document.getElementById("root")
ReactDOM.render( < App / > , root);