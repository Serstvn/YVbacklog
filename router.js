const express = require('express');
const router = express.Router();

const conn = require('./database/db');


//MOSTRAR LOS REGISTROS
router.get('/', (req, res) => {
    conn.query('SELECT * FROM empleados', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index',{results:results});
        }
    })
})


//CRUD CREAR EMPLEADO-->
router.get('/create', (req,res)=>{
    res.render('create');
})

const crud =require('./controllers/crud');
router.post('/save', crud.save);

module.exports = router;