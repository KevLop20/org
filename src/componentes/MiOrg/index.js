import "./MiOrg.css"
//import { useState } from "react"

const MiOrg = (props) => {

    //useState
    // const [nombreInicial, funtcionActualizar] = useState(valorInicial)

    return <section className="orgSection">
        <h3 className="tittle">Mi Organización</h3>
        <img src="/images/add.png" alt="org" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg