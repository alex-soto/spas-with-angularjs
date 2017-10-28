(function () {
'use strict';

var myApp = angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunchItems = '';

  $scope.checkIfTooMuch = function () {
    // Variables to control the styles for the textbox and message
    $scope.textBoxStyle = '';
    $scope.messageStyle = '';

    var items = $scope.lunchItems.split(',').filter(
      function (item) {
        return (item.trim().length > 0 && item);
      }
    );

    if (items.length === 0) {
      $scope.message = 'Please enter data first';
      $scope.textBoxStyle = 'has-error';
      $scope.messageStyle = 'text-danger';
    } else if (items.length > 0 && items.length <= 3) {
      $scope.message = 'Enjoy!';
      $scope.textBoxStyle = 'has-success';
      $scope.messageStyle = 'text-success';
    } else if (items.length > 3) {
      $scope.message = 'Too much!';
      $scope.textBoxStyle = 'has-success';
      $scope.messageStyle = 'text-success';
    }
  }
}

})();
