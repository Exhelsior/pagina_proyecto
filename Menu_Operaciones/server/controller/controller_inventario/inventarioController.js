const { pool } = require("../../database/db");



// ---------------------- Productos -------------------------------
const getAllInventory = async (req, res) => {
    try {
        const {id} = req.params;
        const [producto] = await pool.query('SELECT * FROM Producto', [id]);
        res.json(producto);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener Productos',
            detalles: error.message
        })
    };
};

const getInventory = async (req, res) => {
    try {
        const {id} = req.params;
        const [producto] = await pool.query('SELECT * FROM Producto WHERE Idproducto = ?', [id]);
        res.json(producto);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener Producto',
            detalles: error.message
        })
    };
};

const updateProducto = async (req, res) => {
    try {
        const{id} = req.params;
        const{NombreProducto, Precio, Cantidad, Lote, FechaVencimiento} = req.body;

        const [result] = await pool.query(
            'UPDATE Producto SET NombreProducto = ?, Precio = ?, Cantidad = ?, Lote = ?, FechaVencimiento = ? WHERE IdProducto = ?',
            [NombreProducto, Precio, Cantidad, Lote, FechaVencimiento, id]
        );

        if (result.affectedRows > 0) {
            res.json({ mensaje: 'Producto actulizado exitosamente'});
        } else {
            res.status(404).json({mensaje: 'Insumo no encontrado'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al actualizar Insumo',
            detalles: error.message
        })
    }
};

const createProducto = async (req, res) => {
    try {
        
        const { NombreProducto, Precio, Cantidad, Lote, FechaVencimiento} = req.body; 
        
        const [result] = await pool.query(
            "INSERT INTO Producto (`NombreProducto`, `Precio`, `Cantidad`, `Lote`, `FechaVencimiento`) VALUES (?, ?, ?, ?, ?)",
            [NombreProducto, Precio, Cantidad, Lote, FechaVencimiento]
        );

        res.status(201).json({
            id: result.insertId,
            mensaje: 'Producto creado exitosamente'
        });
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({
            error: 'Error al crear Producto',
            detalles: error.message
        });
    }
};

const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const[result] = await pool.query(
            'DELETE FROM Producto WHERE IdProducto = ?', [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        res.json({
            mensaje: 'Producto eliminado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al elimar producto',
            detalles: error.message
        });
    }
};


module.exports = {
    getAllInventory,
    getInventory,
    updateProducto,
    createProducto,
    deleteProducto
};
