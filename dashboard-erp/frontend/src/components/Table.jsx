function Table({ columns = [], data = [] }) {
  return (
    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        overflow-hidden
      "
    >
      <table className="w-full">
        <thead className="bg-zinc-950">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="
                  text-left
                  px-6
                  py-4
                  text-zinc-400
                  font-medium
                "
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="
                border-t
                border-zinc-800
                hover:bg-zinc-800/50
                transition
              "
            >
              <td className="px-6 py-4 text-white">
                {item.nombre}
              </td>

              <td className="px-6 py-4 text-zinc-300">
                {item.email}
              </td>

              <td className="px-6 py-4 text-zinc-300">
                {item.telefono}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                    ${
                      item.estado === "Activo"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-red-500/20 text-red-400"
                    }
                  `}
                >
                  {item.estado}
                </span>
              </td>

              <td className="px-6 py-4">
                <button
                  className="
                    bg-indigo-600
                    hover:bg-indigo-500
                    px-4
                    py-2
                    rounded-lg
                    text-white
                    transition
                  "
                >
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table