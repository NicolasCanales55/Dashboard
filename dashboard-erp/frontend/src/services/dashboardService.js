const API_URL = "http://localhost:5200/api/dashboard"

export const getVentas = async () => {
    const res = await fetch(`${API_URL}/ventas`)
    return res.json()
}