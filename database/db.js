var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});


conn.connect((error)=>{
    if(error){
        console.error('error en la conexion en:' + error);
        return
    }
    console.log('conectado a la BD');
})

module.exports = conn;