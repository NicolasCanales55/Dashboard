import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

function MainLayout(){
    return(
        <div className="flex bg-zinc-950 min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout