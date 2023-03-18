const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// signup a new user '/api/users'
router.post('/', async (req, res) => {
    try {
        // required fields username, email and password
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
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

// login route for existing user '/api/users/login'
router.post('/login', async (req, res) => {
    try {
        // find user based off of email address
        const userData = await User.findOne({
            where: {
                email: req.body.email,
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

// POST route to log out of session '/api/users/logout'
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
