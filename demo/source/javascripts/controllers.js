angular.module('controllers', [])
  .controller('testCase', function testCase($scope) {
    $scope.options = [
      {
        name: "Gutterless",
        instructions: {
          selector: ".l-row",
          modifier: "m-gutterless"
        }
      }
    ];
  });
