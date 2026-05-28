import Table from "../components/Table"

const columns = [
    "Nombre",
    "Email",
    "Teléfono",
    "Estado",
    "Acciones"
]

const clientes = [
    {
        nombre: "Nicolás Canales",
        email: "nicolas@correo.com",
        telefono: "+56 9 1234 1234",
        estado: "Activo"
    },
    {
        nombre: "Mario Castañeda",
        email: "mario@correo.com",
        telefono: "+56 9 2345 2345",
        estado: "Activo"
    },
    {
        nombre: "Mes Si",
        email: "messi@correo.com",
        telefono: "+56 9 3456 3456",
        estado: "Activo"
    },
    {
        nombre: "Manolo Manolín",
        email: "manolo@correo.com",
        telefono: "+56 9 4567 4567",
        estado: "Inactivo"
    },
]

function Clientes(){
    return(
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div className="p-8">
                    <h1 className="text-4x1 font-bold text-white">
                        Clientes
                    </h1>
                    <p className="text-4x1 font-bold text-white">
                        Gestiona tus clientes
                    </p>
                </div>

                <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-x1 text-white font-medium transition">
                    Nuevo Cliente
                </button>
            </div>

            <Table columns={columns} data={clients}></Table>
        </div>
    )
}

export default Clientes