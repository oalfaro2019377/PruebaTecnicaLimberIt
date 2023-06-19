const connection = require('../config/conection');
const bcrypt = require('bcrypt');
const util = require('util');

const query = util.promisify(connection.query).bind(connection);

async function createInit() {
    try {
      const countQuery = 'SELECT COUNT(*) AS total FROM Administrador';
      const insertQuery = 'INSERT INTO Administrador (nombre, apellido, username, password) VALUES (?, ?, ?, ?)';
  
      // Verificar si ya existe un administrador
      const [countResult] = await query(countQuery);
  
      if (countResult && countResult.total !== undefined) {
        const totalAdministradores = countResult.total;
  
        if (totalAdministradores === 0) {
          const hashedPassword = await bcrypt.hash('password', 10); // Encriptar la contraseña (cambiar 'password' por la contraseña real)
  
          // Crear el administrador por defecto
          await query(insertQuery, ['Admin', 'Admin', 'ADMIN', hashedPassword]);
  
          console.log('Administrador por defecto creado exitosamente');
        } else {
          console.log('Ya existe un administrador registrado');
        }
      } else {
        console.log('No se pudo obtener el resultado de la consulta COUNT');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el administrador por defecto');
    }
  }
  
function getAdministrador(req, res) {
  connection.query('SELECT * FROM Administrador', (err, administrador) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener el administrador' });
    } else {
      return res.json(administrador);
    }
  });
}

//REGIONES
function setRegion(req, res){
    const {nombre} = req.body;
    connection.query(`insert into Regiones(nombre) values('${nombre}')`, (err, regionAgregada) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Región agregada', regionAgregada})
        }
    })
}

function getRegiones(req, res) {
    connection.query('SELECT * FROM Regiones', (err, regiones) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener regiones'});
      } else {
        return res.json(regiones);
      }
    });
}

function deleteRegion(req, res){
    const {id} = req.params;
    connection.query(`delete from Regiones where id = '${id}'`, (err, regionEliminada) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Región Eliminada', regionEliminada});
        }
    })
}

function updateRegion(req, res){
    const {id} = req.params;
    const {nombre} = req.body;

    connection.query(`update Regiones set nombre = '${nombre}' where id = '${id}'`, (err, regionActualizada) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Región Actualizada', regionActualizada});
        }
    })
}

//SUPERVISORES
function setSupervisor(req, res){
    const {nombre, apellido, regionId} = req.body;
    connection.query(`insert into Supervisores(nombre, apellido, regionId) values('${nombre}', '${apellido}', '${regionId}')`, (err, SupervisorAgregado) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Supervisor agregado', SupervisorAgregado})
        }
    })
}

function getSupervisores(req, res) {
    connection.query('SELECT s.*, r.nombre AS nombre_region FROM Supervisores s LEFT JOIN Regiones r ON s.regionId = r.id', (err, supervisores) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener supervisores' });
      } else {
        return res.json(supervisores);
      }
    });
}  

function deleteSupervisor(req, res) {
    const { id } = req.params;
    connection.query('DELETE FROM Supervisores WHERE id = ?', [id], (err, supervisorEliminado) => {
      if (err) {
        throw err;
      } else {
        res.json({ status: 'Supervisor Eliminado', supervisorEliminado });
      }
    });
  }
  

function updateSupervisor(req, res){
    const {id} = req.params;
    const {nombre, apellido, regionId} = req.body;

    connection.query(`update Supervisores set nombre = '${nombre}', apellido = '${apellido}', regionId = '${regionId}' where id = '${id}'`, (err, supervisorActualizado) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Supervisor Actualizado', supervisorActualizado});
        }
    })
}

//Vendedores
function setVendedor(req, res){
    const {nombre, apellido, supervisorId, regionId} = req.body;
    connection.query(`insert into Supervisores(nombre, apellido, supervisorId, regionId) values('${nombre}', '${apellido}', '${supervisorId}', '${regionId}')`, (err, vendedorAgregado) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Vendedor agregado', vendedorAgregado})
        }
    })
}

function getVendedores(req, res) {
    connection.query('SELECT v.*, r.nombre AS nombre_region, s.nombre AS nombre_supervisor FROM Vendedores v LEFT JOIN Regiones r ON v.regionId = r.id and Supervisores s ON v.supervisorId = s.id', (err, vendedores) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener vendedores' });
      } else {
        return res.json(vendedores);
      }
    });
}  

function deleteVendedor(req, res){
    const {id} = req.params;
    connection.query(`delete from Vendedores where id = '${id}'`, (err, vendedorEliminado) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Vendedor Eliminado', vendedorEliminado});
        }
    })
}

function updateVendedor(req, res){
    const {id} = req.params;
    const {nombre, apellido, supervisorId, regionId} = req.body;

    connection.query(`update Vendedores set nombre = '${nombre}', apellido = '${apellido}', supervisorId = '${supervisorId}', regionId = '${regionId}' where id = '${id}'`, (err, vendedorActualizado) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Vendedor Actualizado', vendedorActualizado});
        }
    })
}

//VENTAS
function setVenta(req, res){
    const {vendedorId, producto, monto} = req.body;
    connection.query(`insert into Regiones(nombre) values('${vendedorId}', '${producto}', '${monto}')`, (err, ventaAgregada) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Venta agregada', ventaAgregada})
        }
    })
}

function getVentas(req, res) {
    connection.query('SELECT ve.*, ve.nombre AS nombre_vendedor FROM Ventas ve LEFT JOIN Supervisores s ON ve.supervisorId = s.id', (err, ventas) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener ventas'});
      } else {
        return res.json(ventas);
      }
    });
}

function deleteVenta(req, res){
    const {id} = req.params;
    connection.query(`delete from Ventas where id = '${id}'`, (err, ventaEliminada) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Venta Eliminada', ventaEliminada});
        }
    })
}

function updateVenta(req, res){
    const {id} = req.params;
    const {vendedorId, producto, monto} = req.body;

    connection.query(`update Regiones set vendedorId = '${vendedorId}', producto = '${producto}', monto = '${monto}' where id = '${id}'`, (err, ventaActualizada) =>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Venta Actualizada', ventaActualizada});
        }
    })
}

//EXPORTACIONES
module.exports = {
  createInit,
  getAdministrador,
  //Region
  setRegion,
  getRegiones,
  deleteRegion,
  updateRegion,
  //Supervisor
  setSupervisor,
  getSupervisores,
  deleteSupervisor,
  updateSupervisor,
  //Vendedores
  setVendedor,
  getVendedores,
  deleteVendedor,
  updateVendedor,
  //Ventas
  setVenta,
  getVentas,
  deleteVenta,
  updateVenta
};
