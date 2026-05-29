import { useEffect, useState } from "react"
import Table from "../components/Table"
import { getClientes } from "../services/clientesService"

const columns = [
  "Nombre",
  "Email",
  "Teléfono",
  "Estado",
  "Acciones"
]

function Clientes() {
  const [clientes, setClientes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    cargarClientes()
  }, [])

  const cargarClientes = async () => {
    const data = await getClientes()
    setClientes(data)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="p-8 text-white">
        Cargando clientes...
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Clientes
          </h1>
          <p className="text-zinc-400">
            Gestión de clientes del sistema
          </p>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl text-white">
          Nuevo Cliente
        </button>
      </div>

      <Table columns={columns} data={clientes} />
    </div>
  )
}

export default Clientes