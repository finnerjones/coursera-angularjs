(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['FavoriteDishService', 'PreferencesService'];
function SignUpController(FavoriteDishService, PreferencesService) {
  var $ctrl = this;
  $ctrl.formSaved = false;
  $ctrl.error = false;

  // initializing userDatails object
  $ctrl.formDetails = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    favDishShortName: undefined,
    favDishDetails: undefined
  };

  $ctrl.submit = function(form) {
    var promisedFavoriteDish = FavoriteDishService.getFavoriteDish($ctrl.formDetails.favDishShortName);

    promisedFavoriteDish.then(function(response) {
      console.log('response.status : ' + response.status);
      if (response.status == 200) {
        $ctrl.formDetails.favDishDetails = response.data;
        PreferencesService.savePreferences($ctrl.formDetails);
        $ctrl.formSaved = true;
      } else if (response.status != 200) {
        $ctrl.formSaved = false;
        $ctrl.error = true;
        //form.favDishShortName.$setValidity('$valid', false);
      }
    });
  }


}


})();
