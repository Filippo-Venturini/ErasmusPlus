const express = require('express');
const universitiesController = require('../controllers/universitiesController');

const router = express.Router();

router.route('/universities')
    .get((req, res) => universitiesController.all_universities(req, res));

router.route('/universitydetail:id')
    .get((req, res) => universitiesController.university_detail(req, res));

router.route('/addoffer')
    .post((req, res) => universitiesController.add_offer(req, res)
    )


module.exports = router;