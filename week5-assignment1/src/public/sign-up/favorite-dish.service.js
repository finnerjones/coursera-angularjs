(function () {
'use strict'

angular.module('public')
.service('FavoriteDishService', FavoriteDishService)
.constant('MENU_ITEMS_BASE_URL', 'https://sf-hu-ajs-week5.herokuapp.com/menu_items/');


FavoriteDishService.$inject = ['$http', 'MENU_ITEMS_BASE_URL'];
function FavoriteDishService ($http, MENU_ITEMS_BASE_URL) {
  var service = this;

  service.getFavoriteDish = function () {
    return $http({
      method: 'GET',
      url: MENU_ITEMS_BASE_URL + 'A1.json'
    }).then(function (response) {
      return response;
    });
  };


}


})();
