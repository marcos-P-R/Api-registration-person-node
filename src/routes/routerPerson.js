const { Router } = require('express');
const PersonController = require('../controller/PersonController');

const router = Router();

router.get('/person', PersonController.getAll);

module.exports = router;