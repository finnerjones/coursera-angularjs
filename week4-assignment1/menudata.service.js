(function () {
'use strict'

angular.module('data')
.service('MenuDataService', MenuDataService)
.const('CATEGORIES_URL', 'https://davids-restaurant.herokuapp.com/categories.json')
.const('CATEGORY_ITEMS_URL','https://davids-restaurant.herokuapp.com/menu_items.json?category=');


MenuDataService.$inject = ['$http', 'CATEGORIES_URL', 'CATEGORY_ITEMS_URL'];
function MenuDataService ($http, CATEGORIES_URL, CATEGORY_ITEMS_URL) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: 'GET',
      url: CATEGORIES_URL
    });
  };


  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: 'GET',
      url: CATEGORY_ITEMS_URL + categoryShortName
    });
  };

}


})();
