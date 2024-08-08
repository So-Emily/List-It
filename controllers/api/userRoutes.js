// controllers/userRoutes.js
const router = require('express').Router();
// const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const _ = require('lodash');

// Mock user database 
const users = [];


// Register route (for testing purposes)
router.post('/register', async (req, res) => {
  try {
    const createUser = await User.create(req.body,{raw:true});
    req.session.save(() => {
      const userInfo = _.omit(createUser, ['password']);
      req.session.user_id = createUser.id;
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
    const userLogin = await User.findOne({ where: { email: req.body.email } }, {raw:true});

    if (!userLogin) {
      return res.status(404).send('Username or password incorrect');
    }

    const passwordValid = await userLogin.checkPassword(req.body.password);
    if (!passwordValid) {
      return res.status(401).send('Username or password incorrect');
    }
  req.session.save(() => {
    const userInfo = _.omit(userLogin, ['password']);
    req.session.user_id = userInfo.id;
    req.session.logged_in = true;
    res.status(200).json(userInfo);

});
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});


router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(204).end();
        }
    });
});

module.exports = router;