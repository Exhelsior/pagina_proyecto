import { apiClient } from "./API_REST.js";

export async function envios() {
    try {
        const data = await apiClient.getAll();
        if (!data) throw new Error("No se encontraron los productos");

        showEnvios(data);
        // console.log(data);
    } catch (error) {
        console.error("Error", error.message);
    }
}