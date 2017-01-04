angular.module('mainApp').factory('Myservice', function ($http, $log, $q,Sortservice) {

  return {
    getdata: function () {
      var deferred = $q.defer();
      $http.get('employee.json')
        .then(function (data) {
          
            var new_data=Sortservice.sorting(data);
            deferred.resolve(new_data);
        }),function (msg, code) {
          deferred.reject(msg);

          $log.error(msg, code);
        };
      return deferred.promise;
    }
  }

});