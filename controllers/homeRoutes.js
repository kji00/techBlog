const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// GET route for all posts for homepage
router.get('/', (req, res) => {
    console.log('get route hit!')
})


// Login page for user
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Signup page for new user
router.get('/signup', async (req, res) => {
    res.render('signup');
})

module.exports = router; 
