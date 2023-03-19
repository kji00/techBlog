const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// GET route for all posts for homepage '/'
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
            // set posts in descending order
            order: [
                ['created_at', 'DESC']
            ],
        });

        const posts = postData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
            username: req.session.username,
            user_id: req.session.user_id
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get user post by id '/post/:id'
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'content',
                'title',
                'created_at'
            ],
            include: [
                {
                    model: Comment,
                    attributes: [
                        'id',
                        'comment',
                        'post_id',
                        'user_id',
                        'created_at'
                    ],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
        });

        const post = postData.map(post => post.get({ plain: true }));

        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn,
            username: req.session.username,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }   
});


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
