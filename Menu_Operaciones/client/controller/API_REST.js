const API_URL = 'http://localhost:3000/';

export const apiClient = {
    async getAllProductos(path) {
        try {
            const response = await fetch(`${API_URL}${path}`, );
            if (!response.ok) throw new Error('Error al obtener productos');
            return await response.json();
        } catch (error) {
            console.error(error.message);
            return null;
        }
    },

    async getByIdProducto(id, path) {
        try {
            const response = await fetch(`${API_URL}${path}/${id}`);
            if (!response.ok) throw new Error('Producto no encontrado');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async createProducto(data, path) {
        try {
            const response = await fetch(`${API_URL}${path}/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al crear el producto');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async updateProducto(path, id, data) {
        try {
            const response = await fetch(`${API_URL}${path}/update/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al actualizar el producto');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async deleteProducto(path, id) {
        try {
            const response = await fetch(`${API_URL}${path}/delete/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Error al eliminar el producto');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
};

