
const router = require('express').Router();

// GET all lists
router.get('/', async (req, res) => {
    try {
        const listData = await List.findAll();
        res.status(200).json(listData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;