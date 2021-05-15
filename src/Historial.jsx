import React from 'react'


//propiedades de ReactRouter
const Historial= ({match, location, history}) => (

    <div>
        {JSON.stringify(match)}
        {JSON.stringify(location)}<br></br>
        {JSON.stringify(history)}
    </div>

)

export default Historial