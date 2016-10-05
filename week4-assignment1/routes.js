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
      templateUrl: 'home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.html'
    });
}

})();
