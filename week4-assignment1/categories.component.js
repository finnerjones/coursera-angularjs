(function () {
'use strict'

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'categoryList.html',
  controller: CategoriesComponentController,
  bindinds: {
    categories: '<'
  },
  resolve: {
    categories: ['MenuDataService', function (MenuDataService) {
      return MenuDataService.getAllCategories();
    }]
  }
});

CategoriesComponentController.$inject = ['categories'];
function CategoriesComponentController(categories) {
  var $ctrl = this;

  $ctrl.categories = categories;
}


})();
