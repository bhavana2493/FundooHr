angular.module('mainApp').controller('loginCtrl', function ($scope, $state, $auth, localStorageService) {
 
//  email and password validation expression
  $scope.email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  $scope.pwd = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  var config = { method: 'POST', url: 'http://192.168.0.171:3000/login' };
  $scope.login = function () {
    $scope.dataLoading = true;
    $auth.login($scope.user, config)
      .then(function (data) {
        localStorageService.set("token", data.data);
        console.log(config);
        console.log("data_print", data.data)
        console.log("You have successfully signed in!")
        $state.go('home');
        // $location.path('/');
      })
      .catch(function (error) {
        $scope.dataLoading = false;
        document.getElementById("pwd-label").style.color = "rgba(236, 13, 13, 1)";
        document.getElementById("password").style.borderColor = "rgba(236, 13, 13, 1)";
        console.log(error.data.message, error.status);
        $scope.error = "Invalid Password or Email Id";
        // toastr.error(error.data.message, error.status);
      });
  };

});
