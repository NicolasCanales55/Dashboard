const API_URL = "http://localhost:5200/api/clientes"

export const getClientes = async () => {
    try {
        const response = await fetch(API_URL)

        if(!response.ok){
            throw new Error("Error al obtener los clientes")
        }

        return await response.json()
    } catch(error){
        console.error("API error: ",error)
        return []
    }
}