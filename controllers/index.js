const router = require('express').Router();
const listRoutes = require('./api/listRoutes');

router.use('/lists', listRoutes);

module.exports = router;
