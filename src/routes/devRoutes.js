const controller = require('../controllers/devController');
const express = require('express');
const router = express.Router();
const morgan = require('morgan');

router.use(morgan('tiny'));
router.get('/config', controller.getConfig);
router.get('/version', controller.getVersion);
router.get('/seq', controller.getSequelizeVersion);

module.exports = router;



