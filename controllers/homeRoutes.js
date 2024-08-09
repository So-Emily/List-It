const router = require('express').Router();
const checkAuthentication = require('../middlewares/middlewares');

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

module.exports = router;
