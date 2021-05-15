import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//const mayorEdad = edad => edad > 18

//const persona = {"nombre": "Alberto", "apellido": "Quiroga", "edad":29}

/*const curso= {
  "title": "react desde cero",
  "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
  "price":"50usd"
}*/

const Curso= ({id, title, image, price, profesor}) => (
<article className="card">
  
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <Link to={`/cursos/${id}`} >
      <img src={image} alt={title} />
    </Link>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="center">{title}</h3>
    <div className="s-main-center">
      {profesor}
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price} USD`}</a>
    </div>
  </div>
</article>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string,
}

Curso.defaultProps = {
  title: "No se encontró titulo",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDNejncE_0kpANX29b-cDbTfBRbG_UJuPgQdBLG4Fruiw6yxA50ye5ficMrhTFxSS4rc&usqp=CAU",
  price: "--",
  profesor: "" 
}

export default Curso;