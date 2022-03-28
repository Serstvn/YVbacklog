const conn = require("../database/db");


exports.save = (req,res) =>{
    const usuario = req.body.usuario;
    console.log(usuario);

}