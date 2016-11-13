(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController)
  .filter('map2', function() {
    return map2;
  });

  function map2(input, exp1, val1, exp2, val2, defVal) {
    if (input === exp1) {
      return val1;
    } else if (input === exp2) {
      return val2;
    } else {
      return defVal;
    }
  };

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.lunchAnalyis = "";
    $scope.checkLunchItems = function() {
      function validLunchItem(value) {
        return value.trim().length > 0;
      };
      function analyze(items) {
        if (items.length == 0) {
          return "Please enter data first";
        } else if (items.length <= 3) {
          return "Enjoy!";
        } else {
          return "Too much!";
        }
      };
      $scope.lunchAnalyis = analyze($scope.lunchItems.split(",").filter(validLunchItem));
    };
  };
})();
