import {
    LayoutDashboard,
    ShoppingCart,
    Users,
    Package,
    BarChart3,
    Settings
} from "lucide-react"

import { NavLink } from "react-router-dom"

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Ventas", icon: ShoppingCart, path: "/ventas"},
    { name: "Clientes", icon: Users, path: "/clientes"},
    { name: "Inventario", icon: Package, path: "/inventario"},
    { name: "Reportes", icon: BarChart3, path: "/reportes"},
    { name: "Configuración", icon: Settings, path: "/configuracion"},

]

function Sidebar(){
    return (
        <aside className="w-64 bg-zinc-950 border-r border-zinc-800 min-h-screen p-5">
            <h1 className="text-2x1 font-bold text-white mb-10">
                ERP System
            </h1>

            <nav className="space-y-3">
                {menuItems.map((item)=>{
                    const Icon = item.icon

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `
                                w-full
                                flex
                                items-center
                                gap-3
                                px-4
                                py-3
                                rounded-xl
                                transition

                                ${
                                isActive
                                    ? "bg-indigo-600 text-white"
                                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                                }
                                `
                            }
                            >
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </NavLink>
                    )
                })}
            </nav>

        </aside>
    )
}

export default Sidebar