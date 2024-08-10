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

router.get('/view/list/:category',checkAuthentication, async (req, res) => {
  try {

    req.session.category = req.params.category;
    const allLists = await List.findAll({ where: {
        category:req.params.category
    } });
    const list = allLists.map((list) => list.get({ plain: true }));
    res.render('lists', {list, logged_in: req.session.logged_in,});
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/create', checkAuthentication, async (req, res) => {
    try {
      res.render('add-list', {logged_in: req.session.logged_in, category:req.session.category});
    } catch (error) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
