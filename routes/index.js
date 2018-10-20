module.exports = function(passport) {
    const express = require('express');
    const router = express.Router();

// controller 

const Controller = require('../routes/controller.js');

// index
router.get('/', Controller.Render);
router.post('/', Controller.Index);

// register
router.get('/register/nanny', Controller.RegisterNanny);
router.post('/register/nanny', Controller.RegisterNannySave);

// account
router.get('/account/nanny', Controller.AccountNanny);

//router.get('/register/parent', Controller.RegisterParent);

router.get('/list', Controller.List);
router.get('/item', Controller.Item);


//router.get('/test', tictactoeController.test);
//router.post('/', tictactoeController.gameP);

    // auth

    // PROFILE SECTION =========================
    router.get('/profile', isLoggedIn, function(req, res) {
        res.render('auth/profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
    // LOGIN ===============================
    // show the login form
    router.get('/login', function(req, res) {
        res.render('auth/login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    module.exports = router;

    return module.exports;
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}