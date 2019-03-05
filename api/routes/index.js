var express = require('express');
var router =  express.Router();
//require that controller
var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');


//set what happpens when someone calls this api with the /hotels path
router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll)//find hotel
    .post(ctrlHotels.hotelsAddOne);//add hotel

router//find one hotel
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne)
    .put(ctrlHotels.hotelsUpdateOne)
    .delete(ctrlHotels.hotelsDeleteOne);


//review routes
router //find all reviews for a hotel
    .route('/hotels/:hotelId/reviews')
    .get(ctrlReviews.reviewsGetAll)
    .post(ctrlReviews.reviewsAddOne);

router//find one review for a hotel
    .route('/hotels/:hotelId/reviews/:reviewId')
    .get(ctrlReviews.reviewsGetOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;