(function() {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = '';
    $scope.foodList = '';

    $scope.check = function () {
      if ($scope.foodList.length === 0) {
        $scope.message = 'Please enter data first';
        return;
      }

      var actualNumber = 0;
      for (var value of $scope.foodList.split(",")) {
        if (value.trim().length > 0) {
          actualNumber += 1;
        }
      }

      $scope.message = actualNumber <= 3 ? 'Enjoy!' : 'Too much!';
    };
  }

})();
