
const { Router } = require('express');    
const { post, update, getAll } = require('../controllers/libro_controller');
const router_libro = Router();

router_libro.post('/registrarLibro',post);
router_libro.put('/modificarLibro/:id_libro',update);
router_libro.get('/obtenerLibros',getAll);
module.exports = {router_libro};