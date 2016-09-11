(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.message = '';
  $scope.foodList = '';
  $scope.messageColor = 'red';
  $scope.textboxBorderColor = 'lightgrey';

  var numberOfFoodItems = 0;

  $scope.checkIfTooMuch = function () {
    var foods = removeEmptyFoods();
    if (foods.length === 0) {
      $scope.message = 'Please enter data first';
      $scope.messageColor = 'red';
      $scope.textboxBorderColor = 'red';
      return;
    }

    if (numberOfFoodItems <= 3 ) {
      $scope.message = 'Enjoy!';
      $scope.messageColor = 'green';
      $scope.textboxBorderColor = 'green';
    } else {
      $scope.message = 'Too much!';
      $scope.messageColor = 'green';
      $scope.textboxBorderColor = 'green';
    }
  };

  // apparently ng-blur does not work on Safari or FF - Chrome is OK
  $scope.resetMessage = function () {
    $scope.message = '';
  }

  function removeEmptyFoods() {
    var foods = new Array();
    var arrayOfFoods = $scope.foodList.split(',');

    for (var i = 0; i < arrayOfFoods.length; i++) {
      if (arrayOfFoods[i]) {
        foods.push(arrayOfFoods[i])
      }
    }
    numberOfFoodItems = foods.length;
    return foods;
  }


}

} )();
