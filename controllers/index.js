const router = require('express').Router();

const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes.js');

router.use('/', mainRoutes);
router.use('/api', apiRoutes);

module.exports = router;