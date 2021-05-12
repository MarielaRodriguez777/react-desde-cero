import React from 'react'
import "./styles/styles.scss"
import Curso from './Curso'

const cursos = [{
        "title": "React desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "price": 30,
        "profesor": "Beto Quiroga"
    },
    {
        "title": "Drupal desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/ca1912b1-6a3f-4a47-8731-a619a4335b50.png",
        "price": 50,
        "profesor": "Pedro Quiroga"
    },
    {
        "title": "Go desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
        "price": 10,
        "profesor": "Juan Quiroga"
    },
    {
        "title": "HTML desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
        "price": 20,
        "profesor": "Luis Quiroga"
    }
]

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
        div className = "ed-grid m-grid-3" > {
            cursos.map(curso => < Curso title = { curso.title }
                image = { curso.image }
                price = { curso.price }
                profesor = { curso.profesor }
                />)
            } <
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



        //Este es codigo de la linea 56
        // <Curso 
        /*title="React desde cero con EDteam" 
        image="https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg" 
        price="20 USD"
        profesor="Luis Felipe"*/
        //title="React desde cero"
        //price={20} />