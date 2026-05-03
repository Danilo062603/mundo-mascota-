const Cita = require('../models/citaModel');

// Crear cita
exports.crearCita = (req, res) => {
  const { nombre, mascota, fecha, servicio, telefono, email } = req.body;

  if (!nombre || !mascota || !fecha || !servicio || !telefono || !email) {
    return res.status(400).json({
      error: 'Todos los campos son obligatorios'
    });
  }

  Cita.create(req.body, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al crear la cita' });
    }

    res.status(201).json({
      mensaje: 'Cita creada correctamente',
      id: result.insertId
    });
  });
};

// Obtener citas
exports.getCitas = (req, res) => {
  Cita.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Eliminar cita
exports.eliminarCita = (req, res) => {
  const id = req.params.id;

  Cita.delete(id, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ mensaje: 'Cita eliminada correctamente' });
  });
};