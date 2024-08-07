function checkAuthentication (req, res, next) {
    if(!req.session.login) {
        return res.redirect('/')
    } else {
        return next()
    }
};
module.exports = checkAuthentication;