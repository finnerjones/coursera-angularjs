(function () {
'use strict'

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/components/items-component/templates/itemsList.html',
  bindings: {
    items: '<'
  }
});

})();
