angular.module('directives', [])
  .directive('options', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        defaults: "@",
        options:  "=items"
      },
      templateUrl: 'partials/options-menu.html',
      controller: function($scope, $element, $attrs) {
        var root = angular.element($element).closest('article');

        // Toggle defaults
        $attrs.$observe($scope.defaults, function() {
          if($scope.defaults) {
            $scope.defaults.split(' ').forEach(function(item) {
              var path = item.split('.');
              var obj;

              if(path.length > 1) {
                obj = $scope.options[path[0]]['group'][path[1]];
              } else {
                obj = $scope.options[item];
              }

              $scope.toggle(obj);
            });
          }
        });

        $scope.toggle = function(option, group) {
          // Don't toggle group container
          if(option.group) {
            return;
          }
          if(group) {
            angular.forEach(group, function(set, name) {
              if(!option.active) {
                untoggle(set);
              }
            });
          }

          option.instructions.forEach(function(instruction) {
            root.find(instruction.selector).toggleClass(instruction.modifier);
          });
          option.active = !option.active;
        };

        untoggle = function(option) {
          option.instructions.forEach(function(instruction) {
            root.find(instruction.selector).removeClass(instruction.modifier);
          });
          option.active = false;
        };
      }
    };
  });
