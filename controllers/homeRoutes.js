const router = require('express').Router();
const { where } = require('sequelize');
const checkAuthentication = require('../middlewares/middlewares');

const { User, List } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('login', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Handler for the homepage
router.get('/homepage', checkAuthentication, async (req, res) => {
  try {
    res.render('homepage', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Handler for the register
router.get('/register', async (req, res) => {
  try {
    res.render('register', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('view/list/:category', async (req, res) => {
  try {

    req.session.category = req.params.category;
    const allLists = await List.getAll({ where: {
        categorys:req.params.category
    } });
    const list = allLists.map((list) => list.get({ plain: true }));
    res.render('lists', {list, logged_in: req.session.logged_in  });
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

module.exports = router;
