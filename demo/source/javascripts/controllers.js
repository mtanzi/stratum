angular.module('controllers', [])
  .controller('testCase1', function testCase1($scope) {
    $scope.options = {
      gutterless: {
        label: "Gutterless",
        instructions: [{
          selector: ".l-row",
          modifier: "m-gutterless"
        }]
      }
    };
  })
  .controller('testCase2', function testCase2($scope) {
    $scope.options = {
      gutterless: {
        label: "Gutterless",
        instructions: [{
          selector: ".l-row",
          modifier: "m-gutterless"
        }]
      },
      offsets: {
        group: {
          offset1: {
            label: "Offsets 1",
            instructions: [
              {
                selector: ".l-col:first",
                modifier: "m-pull-1"
              }, {
                selector: ".l-col:last",
                modifier: "m-push-1"
              }
            ]
          },
          offset2: {
            label: "Offsets 2",
            instructions: [
              {
                selector: ".l-col:first",
                modifier: "m-pull-2"
              }, {
                selector: ".l-col:last",
                modifier: "m-push-2"
              }
            ]
          }
        }
      }
    };
  });
