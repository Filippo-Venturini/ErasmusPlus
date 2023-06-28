const express = require('express');
const applicationsController = require('../controllers/applicationsController');
const router = express.Router();

router.route('/applications')
    .get((req, res) => applicationsController.all_applications(req, res));

router.route('/modifyApplicationState:id')
    .post((req, res) => applicationsController.modify_application_state(req, res)
    )

router.route('/addApplication')
    .post((req, res) => applicationsController.add_application(req, res))

router.route('/refuseAll')
    .post((req, res) => applicationsController.refuse_all(req, res))

router.route('/changeToTerminated:id')
    .post((req, res) => applicationsController.change_to_terminated(req, res))


module.exports = router;