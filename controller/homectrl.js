angular.module('mainApp').controller('HomeCtrl', function ($scope, $location, $stateParams, $state, $auth) {
  $scope.isAuth = function () {
    return $auth.isAuthenticated();
  };
  $scope.today = new Date();
  $scope.name = "Bhavana";
  $state.go('home.DashBoard')
  $scope.isActive = function(destination) {
        return destination === $location.path();
    }
});
