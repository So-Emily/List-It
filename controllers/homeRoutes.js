const router = require('express').Router();
const { List, User } = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');
const checkAuthentication = require('../middlewares/middlewares');

router.get('/', async (req, res) => {
    
    try {
        res.render('login', {login:req.session.login})
    } catch (err) {
        res.status(500).json(err);
    }
});

// Handler for the homepage
router.get('/homepage', checkAuthentication, async (req, res) => {
    try {
        res.render('homepage', {login:req.session.login });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Handler for the register
router.get('/register', async (req, res) => {
    try {
        res.render('register', {login:req.session.login});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
