const router = require('express').Router();
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

router.get('/view/list/:category', checkAuthentication, async (req, res) => {
  try {
    req.session.category = req.params.category;
    req.session.save(() => {
      res.redirect('/list-views');
    });
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/list-views', checkAuthentication, async (req, res) => {
  try {
    // Gets all the items that are part of the specific category selected
    // that the current user and saved
    const allLists = await List.findAll({
      where: {
        category: req.session.category,
        user_id: req.session.user_id,
      },
    });
    if (!allLists) {
      return res.redirect('/homepage'); // Redirect if list data is not found
    }
    // This will be used to display the user's name in the header
    // in the handlebar page
    let user = await User.findByPk(req.session.user_id, {
      attributes: ['name'],
    });
    if (!user) {
      return res.redirect('/homepage'); // Redirect if user data is not found
    }
    // Converts to raw data
    user = user.get({ plain: true });
    const list = allLists.map((list) => list.get({ plain: true }));
    // Once all the data has been verified, it will be sent
    // to the handlebars file to be rendered
    res.render('lists', {
      list,
      logged_in: req.session.logged_in,
      category: req.session.category,
      ...user,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/create', checkAuthentication, async (req, res) => {
  try {
    // redirects the page to the handlebars page where user
    // can create a new list item
    res.render('add-list', { logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;