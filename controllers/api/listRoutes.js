const router = require('express').Router();
const { List } = require('../../models');


// POST a new list
router.post('/', async (req, res) => {
    try {
        const newList = await List.create(req.body);
        res.status(200).json(newList);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT to update a list
router.put('/:id', async (req, res) => {
    try {
        const updatedList = await List.update(req.body, {
        where: {
            id: req.params.id,
        },
        });
        res.status(200).json(updatedList);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE a list
router.delete('/:id', async (req, res) => {
    try {
        const listData = await List.destroy({
        where: {
            id: req.params.id,
        },
        });
        res.status(200).json(listData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;