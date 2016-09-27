(function () {
'use strict'

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);



function FoundItemsDirective () {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController () {
  var list = this;

  list.emptyList = function () {
    return (!list.foundItems || list.foundItems.length == 0);
  }

}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var ctrl = this;
  ctrl.searchTerm = '';

  ctrl.getMatchedMenuItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function(array) {
      ctrl.found = array;
    });
  };

  ctrl.removeItems = function (index) {
    ctrl.found.splice(index, 1);
  };

}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function(result) {
      var allItems = result.data;

      var found = [];
      if (!searchTerm || searchTerm === '') {
        found = [];
      } else {
        for (var idx = 0; idx < allItems['menu_items'].length; idx++) {
          if (allItems['menu_items'][idx].description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
            found.push(allItems['menu_items'][idx]);
          }
        }
      }

      return found;
    });
  }
}

})();
