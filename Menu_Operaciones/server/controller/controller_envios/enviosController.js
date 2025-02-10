const { pool } = require('../../database/db');

const getAllEnvios = async (req, res) => {
    try {
        const {id} = req.params;
        const [envios] = await pool.query('SELECT * FROM envios', [id]);
        res.json(envios);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener los envios',
            detalles: error.message
        })
    };
};

const getEnvio = async (req, res) => {
    try {
        const {id} = req.params;
        const [envio] = await pool.query('SELECT * FROM envios WHERE IdEnvio = ?', [id]);
        res.json(envio);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener el envio',
            detalles: error.message
        })
    };
};

const updateEnvio = async (req, res) => {
    try {
        const{id} = req.params;
        const {IdPedidos, DireccionEnvio, FechaEnvio, EstadoEnvio, Comentarios} = req.body;

        const [result] = await pool.query(
            'UPDATE envios SET IdPedidos = ?, DireccionEnvio = ?, FechaEnvio = ?, EstadoEnvio = ?, Comentarios = ? WHERE IdEnvio = ?',
            [IdPedidos, DireccionEnvio, FechaEnvio, EstadoEnvio, Comentarios, id]
        );

        if (result.affectedRows > 0) {
            res.json({mensaje: 'Envio actualizado correctamente'});
        }
    } catch (error){
        console.error(error);
        res.status(500).json({
            error: 'Error al actualizar envio',
            detalles: error.message
        })
    }
};

const createEnvio = async (req, res) => {
    try {
        const { IdPedidos, DireccionEnvio, FechaEnvio, EstadoEnvio, Comentarios } = req.body;

        const [result] = await pool.query(
            "INSERT INTO envios (`IdPedidos`, `DireccionEnvio`, `FechaEnvio`, `EstadoEnvio`, `Comentarios`) VALUES (?, ?, ?, ?, ?)",
            [IdPedidos, DireccionEnvio, FechaEnvio, EstadoEnvio, Comentarios]
        );

        res.status(201).json({
            id:result.insertId,
            mensaje: 'Envio creado exitosamente'
        });
    } catch (error){
        console.error('Error al crear cliente', error);
        res.status(500).json({
            error:'Error al crear Cliente',
            detalles: error.message
        });
    }
};

module.exports = {
    getAllEnvios,
    getEnvio,
    updateEnvio,
    createEnvio
}