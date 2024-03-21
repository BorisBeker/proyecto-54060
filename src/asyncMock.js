const products = [
    {
        id: "1",
        tittle:"Horizon Zero Dawn",
        description: "Es un videojuego de acción y aventura en un mundo abierto maravilloso.",
        category: "adventure",
        price: 2000,
        image: "https://upload.wikimedia.org/wikipedia/en/9/93/Horizon_Zero_Dawn.jpg"
    },
    {
        id: "2",
        tittle:"God Of War: Ragnarok",
        description: "Otro god of war...",
        category: "fantasy",
        price: 3000,
        image: "https://assets-prd.ignimgs.com/2022/07/25/9781506733494-1658716557072.jpg"
    },
    {
        id: "5",
        tittle:"Street Fighter VI",
        description: "Otro street fighter...",
        category: "struggle",
        price: 4000,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1407/XFU0aPBvtm3W2od1ZvhByAOv.png"
    }
]

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000)
})

export const getProduct = (id)=>{
    return products.find(prod => prod.id == id);
}