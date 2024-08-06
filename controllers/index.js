const router = require('express').Router();
const listRoutes = require('./api/listRoutes');
const userRoutes = require('./api/userRoutes');

router.use('/lists', listRoutes);
router.use('/users', userRoutes);

module.exports = router;