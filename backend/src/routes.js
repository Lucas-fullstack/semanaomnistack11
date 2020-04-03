//importando modulos do node
const express = require('express');
//validacao
const { celebrate, Segments, Joi } = require('celebrate');

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
routes.post('/ongs', celebrate({ 
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
 }), OngController.create);

// listagem de casos existentes
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

//cadastro de casos das ongs
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
}).unknown(),
[Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
})
}), IncidentController.create);

// listagem de casos existentes ong especifica
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
}).unknown(),
}), ProfileController.index);

//deleta casos das ongs
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);




 module.exports = routes;