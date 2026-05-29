import StatCard from "../components/StatCard"
import SalesChart from "../components/SalesChart"

function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Dashboard
      </h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        <StatCard title="Ventas" value="$12.430" />
        <StatCard title="Clientes" value="1.240" />
        <StatCard title="Productos" value="320" />
        <StatCard title="Órdenes" value="89" />
      </div>

      <div className="mt-8">
        <SalesChart />
      </div>
    </div>
  )
}

export default Dashboard