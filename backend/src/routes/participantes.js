//Especificar Rutas - "Enrutadores"
const { Router } = require('express');
const router = Router();

const { getParticipantes, createParticipante, getParticipante, updateParticipante, deleteParticipante, updateDispositivos } = require('../controllers/participantes.controller');

// Tomar de la ruta inicial, consultas HTTP
router.route('/')
    .get(getParticipantes)
    .post(createParticipante);

// Si ingreso con una id, interactuar con estas peticiones
router.route('/:id')
    .get(getParticipante)
    .put(updateParticipante)
    .delete(deleteParticipante);

router.route('/agregarDispositivos/:id')
    .put(updateDispositivos);

module.exports = router;