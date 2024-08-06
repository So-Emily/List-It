const router = require('express').Router();
const { Task } = require('../../models');

// GET all tasks
// This route will return all tasks
// This route will be used to populate the user dashboard with tasks
router.get('/', async (req, res) => {
    try {
        const taskData = await Task.findAll();
        res.status(200).json(taskData);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

// POST a new task
// This route will create a new task
// This route will be used to add tasks to the user dashboard
router.post('/', async (req, res) => {
    try {
        const taskData = await Task.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(taskData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE a task
// This route will delete a task
// This route will be used to remove tasks from the user dashboard
router.delete('/:id', async (req, res) => {
    try {
        const taskData = await Task.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!taskData) {
            res.status(404).json({ message: 'No task found with this id!' });
            return;
        }

        res.status(200).json(taskData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT a task
// This route will update a task
// This route will be used to update tasks on the user dashboard
router.put('/:id', async (req, res) => {
    try {
        const taskData = await Task.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!taskData[0]) {
            res.status(404).json({ message: 'No task found with this id!' });
            return;
        }

        res.status(200).json(taskData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
