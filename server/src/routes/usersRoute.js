const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.route('/users')
    .get((req, res) => usersController.all_users(req, res));
router.route('/userdetail:mail')
    .get((req, res) => usersController.user_details(req, res));
router.route('/:mail')
    .get((req, res) => usersController.get_new_notification(req, res))
    .put((req, res) => usersController.read_notification(req, res));

router.route('/addFavourite:mail')
    .post((req, res) => usersController.add_favourites(req, res));

router.route('/removeFavourite:mail')
    .post((req, res) => usersController.remove_favourite(req, res));

module.exports = router;