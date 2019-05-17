var Auth = {
    check_login: function (req, res, next)
    {
        if (!req.session.logged_in) {
            return res.redirect('/login');
        }

        next();
    },
    is_admin: function (req, res, next)
    {
        if (req.session.admin == true) {

            next();
        }else {
            req.flash('info', 'Maaf, Anda tidak dapat mengakses halaman yang Anda tuju!');
            return res.redirect('/admin');
        }
    },
    is_member: function (req, res, next)
    {
        if (req.session.admin == false) {

            next();
        }else {
            req.flash('info', 'Maaf, Anda tidak dapat mengakses halaman yang Anda tuju!');
            return res.redirect('/member');
        }

    },
};

module.exports = Auth;
