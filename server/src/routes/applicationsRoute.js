const express = require('express');
const applicationsController = require('../controllers/applicationsController');
const router = express.Router();

router.route('/applications')
    .get((req, res) => applicationsController.all_applications(req, res));

module.exports = router;