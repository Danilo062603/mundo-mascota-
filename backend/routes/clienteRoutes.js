const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// ESTE VA PRIMERO
router.get('/verificar/email', clienteController.verificarEmail);


router.get('/', clienteController.obtenerClientes);
router.get('/:id', clienteController.obtenerClientePorId);

module.exports = router;
