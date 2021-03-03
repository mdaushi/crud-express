const { user } = require('../models');

module.exports = app => {
    const users = require('../controllers/user.controller');

    let router = require('express').Router();

    router.post('/create', users.create);
    router.get('/', users.findAll);
    router.get('/:id', users.findOne);
    router.put('/:id', users.update);

    app.use('/api/users', router);
}