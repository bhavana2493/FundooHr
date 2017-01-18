angular.module('mainApp').controller('dashCtrl', function ($scope,localStorageService,restService) {
    var token=localStorageService.get('token');
    var dash_timeStamp = (new Date().getTime()).toString();
    var query = { token:token.token,
         timeStamp: dash_timeStamp};
    var promise = restService.getRequest('readDashboardData', query);
     promise.then(function (data) {
         $scope.dashData=data.data;
         console.log(data);
     })
})