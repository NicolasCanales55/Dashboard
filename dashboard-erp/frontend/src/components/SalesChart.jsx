import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { getVentas } from "../services/dashboardService"

function SalesChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    cargar()
  }, [])

  const cargar = async () => {
    const result = await getVentas()
    setData(result)
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[400px]">
      <h2 className="text-white text-2xl font-bold mb-6">
        Ventas Mensuales
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ventas"
            stroke="#6366f1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesChart