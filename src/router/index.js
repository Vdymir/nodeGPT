const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.post('/models', controller.create);

router.get('/models', controller.read);

router.put('/models/:id', controller.update);

router.delete('/models/:id', controller.delete);


module.exports = router;