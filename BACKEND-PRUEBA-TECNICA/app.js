const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/rutas.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:4200', // Reemplaza con la URL correcta de tu cliente Angular
    optionsSuccessStatus: 200
  }));

app.use('/api', routes);

module.exports = app;
