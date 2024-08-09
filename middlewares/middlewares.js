function checkAuthentication (req, res, next) {
    if(!req.session.logged_in) {
        return res.redirect('/')
    } else {
        return next()
    }
};
module.exports = checkAuthentication;