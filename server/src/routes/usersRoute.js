const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.route('/users')
    .get((req, res) => usersController.all_users(req, res));
router.route('/userdetail:id')
    .get((req, res) => usersController.user_details(req, res));

module.exports = router;