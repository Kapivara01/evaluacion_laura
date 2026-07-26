require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware para entender JSON en las peticiones
app.use(express.json());

// Variables de entorno
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Conexión a MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('¡Conectado con éxito a MongoDB IPASME! 🚀');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('Servidor IPASME funcionando correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});