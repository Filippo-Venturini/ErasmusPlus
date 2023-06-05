const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.route('/users:id')
    .get((req, res) => usersController.user_details(req, res));

module.exports = router;