(function () {
'use strict'

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'categories-component/templates/categoryList.html',
  bindings: {
    categories: '<'
  }
});


})();
