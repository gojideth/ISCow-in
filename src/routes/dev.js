const controller = require('../controllers/dev');
const express = require('express');
const router = express.Router();

router.get('/config', controller.getConfig());
router.get('/version', controller.getVersion());
router.get('/seq', controller.seq());

module.exports = router;



