(function () {
'use strict';

angular.module('MenuApp')
.config(MenuRoutesConfig);

MenuRoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function MenuRoutesConfig ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.html',
      controller: 'CategoriesComponentController as $ctrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    });
}

})();
