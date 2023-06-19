const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'KvSmyjd3',
  port: 3306,
  database: 'pruebatecnica'
});

connection.connect((err) => {
  if (err) {
    console.log('ERROR AL CONECTAR', err);
  } else {
    console.log('CONEXION');
  }
});

module.exports = connection;
