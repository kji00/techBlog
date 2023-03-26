const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// signup a new user '/api/user'
router.post('/', async (req, res) => {
    try {
        // required fields username and password
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.status(201).json('User created successfully.')
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// login route for existing user '/api/user/login'
router.post('/login', async (req, res) => {
    try {
        // find user based off of username
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        // if return value is false
        if (!userData) {
            res.status(400).json({ message: 'User does not exist, please create an account' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.status(200).json({ user: userData, message: 'Login Success' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// POST route to log out of session '/api/user/logout'
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
