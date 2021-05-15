import React from "react"
import Curso from "./Curso"

const cursos=[
    {
      "id": 1,
      "titulo":"React desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
      "price": 30,
      "profesor": "Beto Quiroga"
    },
    {
      "id": 2,
      "titulo":"Drupal desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/ca1912b1-6a3f-4a47-8731-a619a4335b50.png",
      "price": 50,
      "profesor": "Pedro Quiroga"
    },
    {
      "id": 3,
      "titulo":"Go desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
      "price": 10,
      "profesor": "Juan Quiroga"
    },
    {
      "id": 4,
      "titulo":"HTML desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
      "price": 20,
      "profesor": "Luis Quiroga"
    }
  ]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
    {cursos.map(c => 
        (<Curso 
            key={c.id}
            id={c.id}
            title={c.titulo}
            image={c.image}
            price={c.price}
            profesor={c.profesor}
            />
        ))
    }
    </div>
)

export default CourseGrid