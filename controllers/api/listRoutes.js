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
router.get('/:id', async (req, res) => { // Update this line
    try {
        console.log(`Fetching list with ID: ${req.params.id}`);
        const listData = await List.findByPk(req.params.id);
        if (!listData) {
            console.log(`No list found with ID: ${req.params.id}`);
            res.status(404).json({ message: 'No list found with this id!' });
            return;
        }
        const list = listData.get({ plain: true });
        res.render('list', { list });
    } catch (err) {
        console.error(`Error fetching list with ID: ${req.params.id}`, err);
        res.status(500).json(err);
    }
});

// POST a new list
router.post('/create', async (req, res) => {
    try {
        const newList = await List.create({
            ...req.body,
            user_id: req.session.user_id,
        });
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