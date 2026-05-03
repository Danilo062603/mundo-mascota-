const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ← pon tu contraseña si tienes
  database: 'mundo_mascota'
});

db.connect(err => {
  if (err) {
    console.error('❌ Error conexión:', err);
  } else {
    console.log('🟢 Conectado a MySQL');
  }
});

module.exports = db;