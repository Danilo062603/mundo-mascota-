const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Definimos las rutas GET
router.get('/', clienteController.obtenerClientes);
router.get('/:id', clienteController.obtenerClientePorId);
router.get('/verificar/email', clienteController.verificarEmail);

module.exports = router;
