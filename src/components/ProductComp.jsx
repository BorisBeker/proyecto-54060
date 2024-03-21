import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../asyncMock";

export default function ProductComp(){
    const {prodId} = useParams();

    const [product, setProduct] = useState({});

    useEffect(()=>{
        setProduct(getProduct(prodId))
    }, [prodId])

    return(
        <>
            <div className="flex flex-col justify-between items-start">
                <h1 className="text-4xl m-4 font-sans font-extrabold">{product.tittle}</h1>
                <img className="h-96 mx-4" src={product.image} alt="" />
                <p className="text-xl mx-4 font-sans">{product.description}</p>
                <p className="text-xl mx-4 font-sans">Precio: ${product.price}</p>
                <button className="text-2xl font-sans font-extrabold px-4 py-2 m-4 bg-blue-500">Buy</button>
            </div>
        </>
    )
}