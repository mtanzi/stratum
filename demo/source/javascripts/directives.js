angular.module('directives', [])
  .directive('options', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        options: "=items"
      },
      templateUrl: 'partials/options.html',
      controller: function($scope, $element, $attrs) {
        $scope.toggle = function(option) {
          var root = angular.element($element).closest('.ng-scope');
          root.find(option.instructions.selector).toggleClass(option.instructions.modifier);

          option.active = !option.active;
        };
      }
    };
  });
