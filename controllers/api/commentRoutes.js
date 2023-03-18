const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments '/api/comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findall();

        return res.json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get all comments from a single post '/api/comments/:id'
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);

        return res.json(commentData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// create a comment '/api/comments'
router.post('/', withAuth, async (req, res) => {
    
})