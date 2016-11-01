(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['FavoriteDishService'];
function SignUpController(FavoriteDishService) {
  var $ctrl = this;
  $ctrl.dish = {};
  // initializing userDatails object
  $ctrl.userDetails = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    dish: undefined
  };

  $ctrl.submit = function() {
    var promisedFavoriteDish = FavoriteDishService.getFavoriteDish();

    promisedFavoriteDish.then(function(response) {
      $ctrl.dish = response.data;
    });
  }


}


})();
