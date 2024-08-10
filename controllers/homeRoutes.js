const router = require('express').Router();
const checkAuthentication = require('../middlewares/middlewares');
const { List } = require('../models');

router.get('/', async (req, res) => {
    
    try {
        res.render('login', {logged_in:req.session.logged_in})
    } catch (err) {
        res.status(500).json(err);
    }
});

// Handler for the homepage
router.get('/homepage', checkAuthentication, async (req, res) => {
    try {
        res.render('homepage', {
            logged_in:req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Handler for the register
router.get('/register', async (req, res) => {
    try {
        res.render('register', {logged_in:req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

// Handler for the lists
router.get('/lists/:id', async (req, res) => {
    try {
        const listData = await List.findByPk(req.params.id);
        if (!listData) {
            res.status(404).json({ message: 'No list found with this id!' });
            return;
        }
        const list = listData.get({ plain: true });
        res.render('lists', { list });
        } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
