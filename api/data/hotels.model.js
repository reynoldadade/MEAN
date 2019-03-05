var mongoose = require('mongoose');

//Create all other related schemas !!important to note
// that your reference schemas must come before your main schema so they exist when referencing them
var roomSchema =  new mongoose.Schema({
   type: String,
   number: Number,
   description: String,
   photos: [String],
   price: Number
});

var reviewSchema =  new mongoose.Schema({
    name : {
       type: String,
       required: true
   },
    rating: {
       type: Number,
       min: 0,
       max: 5,
       required: true
   },
     review : {
       type: String,
       required: true
   },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

//Create your main Schema
var hotelSchema = new mongoose.Schema({
   name : {
       type: String,
       required: true
   },
   stars: {
       type: Number,
       min: 0,
       max: 5,
       default: 0
   },
   services: [String],
   description: String,
   photos: [String],
   currency: String,
   reviews:[reviewSchema],//new review schema here
   rooms:[roomSchema],//room Schema is inserted here
   location:{
       address: String,
       //Always store coordinates longitude(E/W),latitude(N/S)
       coordinates:{
           type: [Number],
           index: '2dsphere' //indexing all coordinates for faster location based searches
       }
   }

});
//COMPILING SCHEMA INTO A MODEL AND TURNING IT INTO AN APPLICATION.
mongoose.model('Hotel', hotelSchema, 'hotels');