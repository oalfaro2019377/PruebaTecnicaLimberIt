const routes = require('express').Router();
const e = require('express');
const connection = require('../config/conection');
const Administrador = require('../controllers/AdministradorController');

//RUTAS
//GET ADMINISTRADOR
routes.get('/getAdministrador', Administrador.getAdministrador);

//AGREGAR REGION
routes.post('/setRegion', Administrador.setRegion);
routes.get('/getRegiones', Administrador.getRegiones);
routes.delete('/deleteRegion/:id', Administrador.deleteRegion);
routes.put('/updateRegion/:id', Administrador.updateRegion);

//SUPERVISORES
routes.post('/setSupervisor', Administrador.setSupervisor);
routes.get('/getSupervisores', Administrador.getSupervisores);
routes.delete('/deleteSupervisor/:id', Administrador.deleteSupervisor);
routes.put('/updateSupervisor/:id', Administrador.updateSupervisor);

//VENDEDORES
routes.post('/setVendedor', Administrador.setVendedor);
routes.get('/getVendedores', Administrador.getVendedores);
routes.delete('/deleteVendedor/:id', Administrador.deleteVendedor);
routes.put('/updateVendedor/:id', Administrador.updateVendedor);

//Ventas
routes.post('/setVenta', Administrador.setVenta);
routes.get('/getVentas', Administrador.getVentas);
routes.delete('/deleteVenta/:id', Administrador.deleteVenta);
routes.put('/updateVenta/:id', Administrador.updateVenta);

module.exports = routes