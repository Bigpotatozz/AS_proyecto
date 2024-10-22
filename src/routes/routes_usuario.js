
const { Router } = require('express');    
const { post, update, getAll} = require('../controllers/usuario_controller');
const router_usuarios = Router();

router_usuarios.post('/registrarUsuario', post);
router_usuarios.put('/actualizarUsuario/:id_usuario', update);
router_usuarios.get('/obtenerUsuarios',getAll);
/*
router_usuarios.delete('/eliminarUsuario/:id_usuario',eliminar_usuario);

*/


module.exports = {router_usuarios};