
const { Router } = require('express');    
const { post, update, getAll, getAllPublic } = require('../controllers/libro_controller');
const router_libro = Router();

router_libro.post('/registrarLibro',post);
router_libro.put('/modificarLibro/:id_libro',update);
router_libro.get('/obtenerLibros',getAll);
router_libro.get('/obtenerLibrosPublic',getAllPublic);
module.exports = {router_libro};