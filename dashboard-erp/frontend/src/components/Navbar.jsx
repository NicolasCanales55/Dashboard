import {Bell, Search} from "lucide-react"

function Navbar(){
    return (
        <header
        className="h-20 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8">
            <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-xl w-80">
                <Search size={18} className="text-zinc-400"/>
                <input type="text" placeholder="Buscar..." className="bg-transparent outline-none text-white w-full" />
            </div>
            <div className="flex items-center gap-5">
                <Bell className="text-zinc-300"/>

                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                    N
                </div>
            </div>
        </header>
    )
}

export default Navbar