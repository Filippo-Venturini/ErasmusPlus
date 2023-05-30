const express = require('express');
const profilesController = require('../controllers/usersController');
const router = express.Router();

router.route('/users')
    .get((req, res) => profilesController.all_users(req, res));

module.exports = router;