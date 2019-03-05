angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController(hotelDataFactory, $routeParams) {
    var vm = this;
    var id = $routeParams.id;
    hotelDataFactory.hotelDisplay(id).then(function (response) {
        //console.log(response)
        vm.hotel = response.data;
        vm.stars = _getStarRating(response.data.stars);
    })
}

function _getStarRating(stars){
    return new Array(stars);
}