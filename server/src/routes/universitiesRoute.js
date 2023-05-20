const express = require('express');
const universitiesController = require('../controllers/universitiesController');
const router = express.Router();

router.route('/universities')
    .get((req, res) => universitiesController.all_universities(req, res));

module.exports = router;