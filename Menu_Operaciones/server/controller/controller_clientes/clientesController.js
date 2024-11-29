const { inventarypool } = require('../../database/db');

const getAllCustomer = async (req, res) => {
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

const getCustomer = async (req, res) => {
    try {
        const {id} = req.params;
        const [cliente] = await inventarypool.query('SELECT * FROM clientes WHERE IdCliente = ?',[id]);
        res.json(cliente);
    } catch (error){
        res.status(500).json({
            error: 'Error al obtener Cliente',
            detalles: error.message
        })
    };
};

const updateCustomer = async (req, res) => {
    try{
        const {id} = req.params;
        const {NombreCompleto, Telefono, DireccionPrincipal} = req.body;

        const [result] = await inventarypool.query(
            'UPDATE clientes SET NombreCompleto = ?, Telefono = ?, DireccionPrincipal = ? WHERE IdCliente = ?',
            [NombreCompleto, Telefono, DireccionPrincipal, id]
        );

        if (result.affectedRows > 0) {
            res.json({ mensaje: 'Cliente actualizado exitosamente'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al actualizar el Cliente',
            detalles: error.message
        })
    }
};

const createCustomer = async (req, res) => {
    try {
        const { NombreCompleto, Telefono, DireccionPrincipal } = req.body;

        const [result] = await inventarypool.query(
            "INSERT INTO clientes (`NombreCompleto`, `Telefono`, `DireccionPrincipal`) VALUES (?, ?, ?)",
            [NombreCompleto, Telefono, DireccionPrincipal] 
        );

        res.status(201).json({
            id: result.insertId,
            mensaje: 'Cliente creado exitosamente'
        });
    } catch (error) {
        console.error('Error al crear cliente', error);
        res.status(500).json({
            error: 'Error al crear Cliente',
            detalles: error.message
        });
    }
};

const deleteCustomer = async (req, res) => {
    try{
        const { id } = req.params;
        
        const[result] = await inventarypool.query(
            'DELETE FROM clientes WHERE IdCliente = ?', [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: 'Cliente no encontrado'
            });
        }
        
        res.json({
            mensaje: 'Cliente eliminado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar el Cliente',
            detalles: error.message
        });
    }
};

module.exports = {
    getAllCustomer,
    getCustomer,
    updateCustomer,
    createCustomer,
    deleteCustomer
};
