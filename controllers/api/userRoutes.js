const router = require('express').Router();
const bcrypt = require('bcryptjs');
const session = require('express-session');

// Mock user database 
const users = [];

// Configure session middleware with a secret key and secure set to true 
router.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } 
}));

// Register route (for testing purposes)
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered');
});

// Login route 
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send('User not found');

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) return res.status(401).send('Invalid password');

  // Save user info in session 
  req.session.user = { username: user.username };
  res.status(200).send('Login successful');
});

// Middleware to check if user is logged in 
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send('Please log in');
  }
};

// Protected route 
router.get('/me', isAuthenticated, (req, res) => {
  res.status(200).send(`Hello user ${req.session.user.username}`);
});




module.exports = router;