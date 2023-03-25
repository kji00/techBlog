const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'bluey',
        password: 'password123!!'
    },
    {
        username: 'bingo',
        password: 'password123!!'
    },
    {
        username: 'bandit',
        password: 'password123!!'
    },
    {
        username: 'chilli',
        password: 'password123!!'
    },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;