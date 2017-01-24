angular.module('mainApp').controller('dashCtrl', function ($scope, localStorageService, restService) {
    var token = localStorageService.get('token');
    var dash_timeStamp = new Date().getTime();
    $scope.dashBoardData=["Engineers","Clients","Reports"]

    // dashboard initialization
    $scope.dashPage=function(){
    var dashBoard = new Date();
    $scope.previous = dashBoard.setDate(dashBoard.getDate() - 1);
    var query = {
        token: token.token,
        timeStamp: dash_timeStamp
    };
    // restService call for Dashboard data..
    var promise = restService.getRequest('readDashboardData', query);
    promise.then(function (data) {
        var dashData = data.data;
        $scope.dashData = dashData;
        console.log(dashData);
    });
    }
    $scope.split = function (key) {
        key = key.split(/(?=[A-Z])/).join(" ");
        return key.charAt(0).toUpperCase() + key.slice(1);
    }

})