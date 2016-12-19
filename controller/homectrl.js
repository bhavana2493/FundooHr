angular.module('mainApp').controller('HomeController', function ($scope,$location, $stateParams, $state,$auth) {
 $scope.isAuth = function() {
   console.log("autentication")
      return $auth.isAuthenticated();

    };
  });
