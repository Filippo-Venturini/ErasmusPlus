const express = require('express');
const applicationsController = require('../controllers/applicationsController');
const router = express.Router();

router.route('/applications')
    .get((req, res) => applicationsController.all_applications(req, res));

router.route('/modifyApplicationState:id')
    .post((req, res) => applicationsController.modify_application_state(req, res)
    )

module.exports = router;