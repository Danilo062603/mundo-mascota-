const Cliente = require('../models/Cliente');

// GET 1: Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener clientes" });
    }
};

// GET 2: Obtener un cliente por su ID
exports.obtenerClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ mensaje: "No encontrado" });
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ mensaje: "Error en la búsqueda" });
    }
};

// GET 3: Verificar si el email ya existe (útil para el formulario)
exports.verificarEmail = async (req, res) => {
    try {
        const existe = await Cliente.findOne({ email: req.query.email });
        res.status(200).json({ registrado: !!existe });
    } catch (error) {
        res.status(500).json({ mensaje: "Error de validación" });
    }
};
