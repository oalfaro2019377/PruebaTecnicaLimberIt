require('./config/conection');
const express = require('express');
const port = (process.env.port || 3000);
const { createInit } = require('./controllers/AdministradorController');
const cors = require('cors');

//Express
const app = express();

//Configuracion del puerto
app.set('port', port);

//Datos de entrada
app.use(express.json());

app.use(cors());

//Rutas
app.use('/api',require('./routes/rutas'))

//Iniciar Express
app.listen(app.get('port'), () => {
    createInit()
      .then(() => {
        console.log('Servidor Iniciado en el Puerto:', port);
      })
      .catch(error => {
        console.error('Error al iniciar el servidor:', error.message);
      });
  });