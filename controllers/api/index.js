const router = require('express').Router();

const listRoutes = require('./listRoutes');

const userRoutes = require('./userRoutes');

router.use('/lists', listRoutes);
router.use('/users', userRoutes);


module.exports = router;