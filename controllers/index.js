const router = require('express').Router();
const taskRoutes = require('./api/taskRoutes');

router.use('/tasks', taskRoutes);

module.exports = router;
