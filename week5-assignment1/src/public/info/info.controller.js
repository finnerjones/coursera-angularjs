(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['PreferencesService'];
function InfoController(PreferencesService) {
  var $ctrl = this;

  $ctrl.preferences = PreferencesService.getPreferences();
}


})();
