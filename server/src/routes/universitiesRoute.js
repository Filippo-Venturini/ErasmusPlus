const express = require('express');
const universitiesController = require('../controllers/universitiesController');
const universityDetailController = require("../controllers/universityDetailController");
const router = express.Router();

router.route('/universities')
    .get((req, res) => universitiesController.all_universities(req, res));

router.route('/universitydetail:id')
    .get((req, res) => universityDetailController.university_detail(req, res));


module.exports = router;