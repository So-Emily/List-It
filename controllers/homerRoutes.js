
const router = require('express').Router();

// GET all lists
router.get('/', async (req, res) => {
    try {
        // const listData = await List.findAll();
        res.render ('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/login', async (req, res) => {
    try {
        // const listData = await List.findAll();
        res.render ('login');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/register', async (req, res) => {
    try {
        // const listData = await List.findAll();
        res.render ('register');
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;