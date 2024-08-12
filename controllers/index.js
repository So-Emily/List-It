// controllers/index.js

const router = require('express').Router();
const listRoutes = require('./api/listRoutes');
const userRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/list', listRoutes); 
router.use('/api/users', userRoutes);

module.exports = router;