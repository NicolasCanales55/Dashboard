function StatCard({title, value}){
    return (
        <div className="bg-zinc-900 p-6 rounded-2x1 border border-zinc-800">
            <p className="text-zinc-400 mb-2">
                {title}
            </p>
            <h2 className="text-3x1 font-bold text-white">
                {value}
            </h2>


        </div>
    )
}

export default StatCard