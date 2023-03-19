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

// POST create a comment '/api/comments/:id'
router.post('/:id', withAuth, async (req, res) => {
    try {
        const newCommentData = await Comment.create({
            comment: req.body.comment,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        });
        res.status(200).json('comment added successfully.');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// DELETE a comment '/api/comments/:id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json('comment deleted successfully.');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;