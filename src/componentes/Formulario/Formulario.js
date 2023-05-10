import './Formulario.css'
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
import { useState } from 'react'

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearNuevoEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarCrearEquipo = (e) => {
        e.preventDefault()
        crearNuevoEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo='Nombre' 
                placeholder='Ingresar nombre' 
                required 
                valor = {nombre}
                actualizarValor = {actualizarNombre}
            />
            <Campo 
                titulo='Puesto' 
                placeholder='Ingresar puesto' 
                required 
                valor = {puesto}
                actualizarValor = {actualizarPuesto}
            />
            <Campo 
                titulo='Foto' 
                placeholder='Ingresar enlace de foto' 
                required 
                valor = {foto}
                actualizarValor = {actualizarFoto}
            />
            <ListaOpciones 
                valor = {equipo} 
                actualizarValor = {actualizarEquipo} 
                equipos = {props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarCrearEquipo}>
            <h2>Rellena el formulario para crear un nuevo equipo</h2>
            <Campo 
                titulo='Titulo' 
                placeholder='Ingresar el titulo' 
                required 
                valor = {titulo}
                actualizarValor = {actualizarTitulo}
            />
            <Campo 
                titulo='Color' 
                placeholder='Ingresar el color en Hexadecimal' 
                required 
                valor = {color}
                actualizarValor = {actualizarColor}
                type="color"
            />
            <Boton>
                Crear Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario