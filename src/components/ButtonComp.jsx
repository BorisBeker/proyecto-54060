import {Link} from 'react-router-dom'

export default function ButtonComp({contenido, enlace, numero = null}){
    return (
        <>
            <button className="font-sans font-semibold text-white hover:text-blue-700"><Link to={enlace}>{contenido}{numero}</Link></button>
        </>
    )
}