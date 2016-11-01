(function () {
"use strict";

angular.module('common')
.service('PreferencesService', PreferencesService);

PreferencesService.$inject = [];
function PreferencesService() {
  var service = this;
  service.userPreferences = {};

  service.savePreferences = function(formDetails) {
    service.userPreferences = formDetails;
  }

}
})();
