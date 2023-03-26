const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// create a new blog post entry '/api/post'
router.post('/', withAuth, async (req,res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// update a previous blog post entry '/api/post/:id'
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatePost = await Post.update({
            title: req.body.title,
            content: req.body.content,
        },
        {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updatePost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// delete a blog post '/api/post/:id'
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });
        res.status(200).json(deletePost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;