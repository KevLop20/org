import Colaborador from "../Colaborador"
import "./Equipos.css"
import hexToRgba from 'hex-to-rgba'

const Equipos = (props) => {
    
    const {titulo, colorPrimario, colorSecundario, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const colorDeFondo = {backgroundColor: hexToRgba(colorPrimario, 0.3)}
    
    return<> { colaboradores.length > 0 &&
            <section className="equipos" style={colorDeFondo}>
                <input 
                    type='color'
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
                <div className="colaboradores">
                    {colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)}
                    
                </div>
        </section>
        }
    </>
}

export default Equipos