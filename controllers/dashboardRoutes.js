const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all post for the dashboard '/dashboard'
router.get('/', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
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
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })
        .then(postData => {
            const posts = postData.map(posts => posts.get({ plain: true }));
            console.log('dashboardRoute\n', posts);
            res.render('dashboard', {
                posts,
                loggedIn: req.session.loggedIn,
                username: req.session.username,
                user_id: req.session.user_id
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// Get one post to edit 'dashboard/edit/:id'
router.get('/edit/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username'],
            },
            {
                model: Comment,
                attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },
        ],
    })
        .then(postData => {
            const posts = postData.get({ plain: true });
            console.log('dashboardRoute-edit\n', posts);
            res.render('edit-post', { posts, loggedIn: true, username: req.session.username });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


module.exports = router; 