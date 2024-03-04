export default function ItemListContainer({ greeting }) {
    return (
        <>
            <section className="flex justify-end bg-white">
                <div className="w-96 h-96 p-4 mr-4 bg-indigo-950 text-center rounded">
                    <h1 className="font-sans font-semibold text-white">{greeting}</h1>
                </div>
            </section>
        </>
    )
}