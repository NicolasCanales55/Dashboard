function Inventario(){
    const products = [
        {
            nombre: "Laptop Gamer",
            stock: 12,
            precio: "$1.000.000"
        },
        {
            nombre: "Laptop Gamer 2",
            stock: 17,
            precio: "$2.000.000"
        },
        {
            nombre: "Laptop Gamer 3",
            stock: 293,
            precio: "$3.000.000"
        },

    ]

    return(
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4x1 font-bold text-white">
                        Inventario
                    </h1>
                    <p className="text-zinc-400 mt-2">
                        Gestiona productos y stock
                    </p>
                </div>

                <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-x1 text-white transition">Nuevo Producto</button>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2x1 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-zinc-950">
                        <tr>
                            <th className="px-6 py-4 text-left text-zinc-400">
                                Producto
                            </th>
                            <th className="px-6 py-4 text-left text-zinc-400">
                                Stock
                            </th>
                            <th className="px-6 py-4 text-left text-zinc-400">
                                Precio
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product, index) =>(
                            <tr key={index} className="border-t border-zinc-800 hover:bg-zinc-800/50">
                                <td className="px-6 py-4 text-white">
                                    {product.nombre}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {product.stock}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {product.precio}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Inventario