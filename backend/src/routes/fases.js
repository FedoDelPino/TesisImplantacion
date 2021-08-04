//Especificar Rutas - "Enrutadores"
const { Router } = require('express');
const router = Router();

const { getFases, createFase, getFase, updateFase, updateFaseMediciones, updateFaseObservaciones, deleteFase } = require('../controllers/fases.controller');

// Tomar de la ruta inicial, consultas HTTP
router.route('/')
    .get(getFases)
    .post(createFase);

// Si ingreso con una id, interactuar con estas peticiones
router.route('/:id')
    .get(getFase)
    .put(updateFase)
    .delete(deleteFase);

router.route('/agregarMediciones/:id')
    .put(updateFaseMediciones);

router.route('/agregarObservaciones/:id')
    .put(updateFaseObservaciones);


module.exports = router;