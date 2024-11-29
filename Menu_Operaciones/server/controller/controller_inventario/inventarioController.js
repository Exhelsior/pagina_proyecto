const { inventarypool } = require('../../database/db');

// ---------------------- Productos -------------------------------
const getAllInventory = async (req, res) => {
    try {
        const {id} = req.params;
        const [producto] = await inventarypool.query('SELECT * FROM Producto', [id]);
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
        const [producto] = await inventarypool.query('SELECT * FROM Producto WHERE Idproducto = ?', [id]);
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

        const [result] = await inventarypool.query(
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
        
        const [result] = await inventarypool.query(
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

        const[result] = await inventarypool.query(
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
//---------------------- Insumos -------------------------------
const getAllInsumo = async (req, res) => {
    try {
        const {id} = req.params;
        const [insumo] = await inventarypool.query('SELECT * FROM Insumos', [id]);
        res.json(insumo);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener Insumo',
            detalles: error.message
        })
    };
};

const getInsumo = async (req, res) => {
    try {
        const {id} = req.params;
        const [insumo] = await inventarypool.query('SELECT * FROM Insumos WHERE IdInsumo = ?', [id]);
        res.json(insumo);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener Insumo',
            detalles: error.message
        })
    };
};

const updateInsumo = async (req, res) => {
    try {
        const{id} = req.params;
        const{nombre, fechaIngreso, fechaVencimiento, cantidad} = req.body;

        const [result] = await inventarypool.query(
            'UPDATE Insumos SET nombre = ?, fechaIngreso = ?, fechaVencimiento = ?, cantidad = ? WHERE IdInsumo = ?',
            [nombre, fechaIngreso, fechaVencimiento, cantidad, id]
        );

        if (result.affectedRows > 0) {
            res.json({ mensaje: 'Insumo actulizado exitosamente'});
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

const createInsumo = async (req, res) => {
    try {
        const { nombre, fechaIngreso, fechaVencimiento, cantidad } = req.body; 
        
        const [result] = await inventarypool.query(
            "INSERT INTO Insumos (`nombre`, `fechaIngreso`, `fechaVencimiento`, `cantidad`) VALUES (?, ?, ?, ?)",
            [nombre, fechaIngreso, fechaVencimiento, cantidad]
        );

        res.status(201).json({
            id: result.insertId,
            mensaje: 'Insumo creado exitosamente'
        });
    } catch (error) {
        console.error('Error al crear insumo:', error);
        res.status(500).json({
            error: 'Error al crear insumo',
            detalles: error.message
        });
    }
};

const deleteInsumo = async (req, res) => {
    try {
        const { id } = req.params;

        const[result] = await inventarypool.query(
            'DELETE FROM Insumos WHERE IdInsumo = ?', [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: 'Insumo no encontrado'
            });
        }

        res.json({
            mensaje: 'Insumo eliminado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al elimar Insumo',
            detalles: error.message
        });
    }
};

const allCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const [customer] = await inventarypool.query('SELECT * FROM clientes', [id]);
        res.json(customer);
    } catch (error){
        res.status(500).json({
            error: 'Error al obtener Clientes',
            detealles: error.message
        })
    };
};

module.exports = {
    getAllInventory,
    getInventory,
    updateProducto,
    createProducto,
    deleteProducto,
    getAllInsumo,
    getInsumo,
    updateInsumo,
    createInsumo,
    deleteInsumo,
    allCustomer
};
