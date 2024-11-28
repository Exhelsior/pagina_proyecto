const { pool } = require('../../database/db');

const getAllCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const [customer] = await pool.query('SELECT * FROM clientes', [id]);
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
        const [cliente] = await pool.query('SELECT * FROM clientes WHERE IdCliente = ?',[id]);
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

        const [result] = await pool.query(
            'UPDATE clientes SET NombreCompleto = ?, Telefono = ?, DireccionPrincipal = ?',
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

module.exports = {
    getAllCustomer,
    getCustomer,
    updateCustomer
};
