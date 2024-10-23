
const { Router } = require('express');    
const { login } = require('../controllers/auth_controller');
const router_auth = Router();

router_auth.post('/login',login);

module.exports = {router_auth};