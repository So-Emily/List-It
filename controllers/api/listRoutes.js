// controllers/api/listRoutes.js

const router = require('express').Router();
const { List } = require('../../models');

// GET all lists
router.get('/', async (req, res) => {
    try {
        const listData = await List.findAll();
        res.json(listData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a specific list by ID
router.get('/:id', async (req, res) => {
    try {
        const list = await List.findByPk(req.params.id);
        if (!list) {
            res.status(404).render('error', { message: 'No list found with this id' });
            return;
        }
        res.render('list', {
            list,
            todoItems: list.todoItems,
            inProcessItems: list.inProcessItems,
            doneItems: list.doneItems
        });
    } catch (error) {
        res.status(500).render('error', { message: 'Internal Server Error' });
    }
});

// POST a new list
router.post('/create', async (req, res) => {
    try {
        const newList = await List.create(req.body);
        res.status(201).json(newList);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT to update a list item
router.put('/update/:id', async (req, res) => {
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
router.delete('/delete/:id', async (req, res) => {
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