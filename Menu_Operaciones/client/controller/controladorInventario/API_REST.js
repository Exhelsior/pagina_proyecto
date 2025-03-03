const API_URL = 'http://localhost:3000/inventario';

export const apiClient = {
    async getAll() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Error al obtener productos');
            return await response.json();
        } catch (error) {
            console.error(error.message);
            return null;
        }
    },

    async getById(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (!response.ok) throw new Error('Producto no encontrado');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async create(data) {
        try {
            const response = await fetch(`${API_URL}/create`, {
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

    async update(id, data) {
        try {
            const response = await fetch(`${API_URL}/update/${id}`, {
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

    async delete(id) {
        try {
            const response = await fetch(`${API_URL}/delete/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Error al eliminar el producto');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
};

