import React, {Component} from "react"


class Formulario extends Component{

    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        //para poder usar this en este metodo, osea que
        //es un llamado directo para el metodo y se define
        //el this del metodo cambiar Nombre
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }


    cambiarNombre(e){
        this.setState({
            nombre:e.target.value
        })
    }

    cambiarCorreo(e){
        this.setState({
            correo:e.target.value
        })
    }

    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }

    //this.setState({}), recibe un objeto y es que se va actualizar

    render() {

        return(
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h4>Fecha Actual: {Math.ceil(this.state.fecha/1000)}</h4>
                <form id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre completo</label>   
                            <input type="text" 
                            //onChange={ e => this.setState({
                            //    nombre: e.target.value
                            //})}

                            onChange={this.cambiarNombre}
                            />
                        </div> 
                        <div className="form__item">
                            <label>Correo Electrónico</label>   
                            <input type="email"
                            /*onChange={ e => this.setState({
                                correo: e.target.value
                            })}*/
                            onChange={this.cambiarCorreo } 
                            />
                        </div>  
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
            
        )
    }

    componentDidMount(){
        
        //let elemento=document.getElementById("elemento")
        this.intervaloFecha =setInterval(()=>{
            this.cambiarFecha()
            console.log(new Date())
        } , 1000)
    }

    componentDidUpdate(prevProps, prevState){
        /*console.log(prevProps)--nos muestra los props anteriores
        console.log(prevState)--nos muestra el ultimo estado
        console.log("-------")*/

    }

    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }
}

export default Formulario