const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('');

router.use('/api', apiRoutes);

module.exports = router;