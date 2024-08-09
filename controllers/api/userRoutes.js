// controllers/userRoutes.js
const router = require('express').Router();
const bcrypt = require('bcrypt');
const session = require('express-session');
const { User } = require('../../models');
const _ = require('lodash');

// Mock user database
const users = [];

// Register route (for testing purposes)
router.post('/register', async (req, res) => {
  try {
    let createUser = await User.create(req.body);
    createUser = createUser.get({plain:true});
    req.session.save(() => {
      const userInfo = _.omit(createUser, ['password']);
      console.log(userInfo);
      req.session.user_id = userInfo.id;
      req.session.logged_in = true;
      res.status(200).json(userInfo);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const userLogin = await User.findOne({ where: { email: req.body.email } });
    console.log(userLogin);
    if (!userLogin) {
      return res.status(404).send('Username or password incorrect');
    }
    const passwordValid = await userLogin.checkPassword(req.body.password);
    if (!passwordValid) {
      return res.status(401).send('Username or password incorrect');
    }
    req.session.save(() => {
        const userInfo = userLogin.get({plain:true});
      const userInfoData = _.omit(userInfo, ['password']);
      req.session.user_id = userInfo.id;
      console.log(req.session.user_id);
      req.session.logged_in = true;
      res.status(200).json(userInfo);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// Logout route

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
