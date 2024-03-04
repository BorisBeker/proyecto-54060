export default function ButtonComp({contenido, enlace, numero = null}){
    return (
        <>
            <button className="font-sans font-semibold text-white hover:text-blue-700"><a href={enlace}>{contenido}{numero}</a></button>
        </>
    )
}