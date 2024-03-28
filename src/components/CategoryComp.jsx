import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { filterCategory } from "../asyncMock"

export default function CategoryComp() {

    const { cateId } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(filterCategory(cateId))
    }, [])

    return (
        <>
            <section className="flex flex-col items-center">
                <h1 className="mt-10 font-sans font-extrabold text-4xl">PRODUCTOS</h1>
                <div className="flex items-center justify-center h-96 px-10 gap-4">

                    {
                        products.map(product => (
                            <div key={product.id} className="flex flex-col items-center justify-between w-80 h-80">
                                <h3 className="font-sans font-extrabold text-xl">{product.tittle}</h3>
                                <img src={product.image} alt="" className="w-40" />
                                <p>Precio: ${product.price}</p>
                                <button className="bg-blue-500 font-sans font-bold p-3" onClick={() => { handleClick(product.id) }}>Ver Detalles</button>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}