//importando modulos do node
const express = require('express');

//importar controllers criados
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//Rota de Login
routes.post('/sessions', SessionController.create);

// listagem de ongs existentes
routes.get('/ongs', OngController.index);

//cadastro de ongs
routes.post('/ongs', OngController.create);

// listagem de casos existentes
routes.get('/incidents', IncidentController.index);

//cadastro de casos das ongs
routes.post('/incidents', IncidentController.create);

// listagem de casos existentes ong especifica
routes.get('/profile', ProfileController.index);

//deleta casos das ongs
routes.delete('/incidents/:id', IncidentController.delete);




 module.exports = routes;