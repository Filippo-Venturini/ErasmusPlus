const express = require('express');
const universitiesController = require('../controllers/universitiesController');

const router = express.Router();

router.route('/universities')
    .get((req, res) => universitiesController.all_universities(req, res));

router.route('/universitydetail:id')
    .get((req, res) => universitiesController.university_detail(req, res));

router.route('/updateOfferAccepted:id')
    .post((req, res) => universitiesController.update_offer_accepted(req, res));

router.route('/addoffer')
    .post((req, res) => universitiesController.add_offer(req, res)
    )

router.route('/updateOffer:id')
    .put((req, res) => universitiesController.update_offer(req, res)
    )

router.route('/addReview')
    .post((req, res) => universitiesController.add_review(req, res)
    )
router.route('/deleteOffer:name')
    .delete((req, res) => universitiesController.delete_offer(req, res)
    )
module.exports = router;