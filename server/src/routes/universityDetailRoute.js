const express = require('express');
const universityDetailController = require('../controllers/universityDetailController');
const router = express.Router();

router.route('/universitydetail')
    .get((req, res) => universityDetailController.university_detail(req, res));

module.exports = router;