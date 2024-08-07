const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes'); // Corrected import path

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;