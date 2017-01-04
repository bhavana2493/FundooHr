angular.module('mainApp').controller('LoginCtrl', function ($scope, $state,$auth) {
  //  $scope.formSubmit = function() {
  //     if(LoginService.login($scope.email, $scope.password)) {
  //       $scope.error = '';
  //       $scope.email = '';
  //       $scope.password = '';
  //       $state.transitionTo('home');
  //     } else {
  //       $scope.error = "Incorrect email/password !";
  //     }
  //   };
  var config = {method: 'POST',url: 'http://192.168.0.171:3000/login'};
  $scope.login = function () {
    $scope.dataLoading = true;
    $auth.login($scope.user,config)
      .then(function (data) {

        console.log("You have successfully signed in!")
         $state.go('home');
        // $location.path('/');
      })
      .catch(function (error) {
        $scope.dataLoading = false;
        document.getElementById("pwd-label").style.color="rgba(236, 13, 13, 1)";
         document.getElementById("password").style.borderColor="rgba(236, 13, 13, 1)";
        console.log(error.data.message, error.status);
        $scope.error = "Invalid Password or Email Id";
        // toastr.error(error.data.message, error.status);
      });
  };
  $scope.authenticate = function (provider) {
    $auth.authenticate(provider)
      .then(function () {
        console.log("You have successfully signed in!" + provider + "!");
        $state.go('home');
      })
      .catch(function (error) {
        if (error.message) {
          // Satellizer promise reject error.
          console.log(error.message);
        } else if (error.data) {
          // HTTP response error from server
          console.log(error.data.message, error.status);
        } else {
          console.log(error);
        }
      });
  };

});
