import React from 'react'
import "./styles/styles.scss"
import Curso from './Curso'

const App = () => (
    /*<Fragment>
      <div className="saludo">
        <h1>Hola Mundo</h1>
        <p>Hola, saludando desde mi componente</p>
      </div>
      <div>
        <img src="https://ed-grid.com/assets/img/utils/rwd.svg"/>
      </div>
    </Fragment>*/
    <
    >
    <
    div className = "main-banner img-container l-section"
    id = "main-banner" >
    <
    div className = "ed-grid lg-grid-6" >
    <
    div className = "lg-cols-4 lg-x-2" >
    <
    img className = "main-banner__img"
    alt = "foto"
    src = "https://wallpapercave.com/wp/wp5852521.jpg" / >
    <
    div className = "main-banner__data s-center" >
    <
    p className = "t2 s-mb-0" > Cursos de EDteam < /p> <
    p > Como sea < /p> <
    a href = "https://ed.team"
    className = "button" > Like and Suscribe < /a> <
    /div> <
    /div> <
    /div> <
    /div>

    <
    div className = "ed-grid m-grid-3" >
    <
    Curso / >
    <
    Curso / >
    <
    Curso / >
    <
    Curso / >
    <
    Curso / >
    <
    Curso / >
    <
    Curso / >
    <
    Curso / >
    <
    /div> <
    />
)

export default App;


/** Reglas JSX
 * Toda etiqueta debe cerrarse
 * los componentes deben devolver UN solo elemento padre
 * Apoyarse de los fragments cuando necesito devolver 2 elementos
 * Fragment => <> hijos </>
 * img siempre se cierra
 */