// controllers/userRoutes.js
const router = require('express').Router();

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