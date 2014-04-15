#= require app/app

@palavaPortal.controller('TutorialController', ['$scope', '$routeParams', '$location', ($scope, $element) =>
  $scope.last = 7
  $scope.step = 1
  $scope.next = =>
    $scope.step += 1 unless $scope.step == $scope.last
  $scope.prev = =>
    $scope.step -= 1 unless $scope.step == 1
])
