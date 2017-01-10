angular.module('mainApp').factory('empService', function ($http, $log, $q,sortService,localStorageService) {

  return {
    getdata: function () {
      var deferred = $q.defer();
      // $http.get('/home/bridgeit/Desktop/employee.json');
        // var akey=localStorage.getItem('satellizer_token');
        var token;
        localStorageService.get(token);
        // http call for fetching data..
          $http({
        "method": "GET",
        "url": "http://192.168.0.171:3000/searchEmployeeByName",
        "data": { token:"1a285sdffd8do8fd" }
      }).then(function (data) {
        //for sorting data....
            var new_data=sortService.sorting(data);
            //sending data...
            deferred.resolve(new_data);
        }),function (msg, code) {
          deferred.reject(msg);

          $log.error(msg, code);
        };
      return deferred.promise;
    },
    createSection :function(dataAll){
             //changing json format
       //according to name data is stored...
        var profile={};
        dataAll.forEach(function(element) {
            // console.log(element);
            var name=element.employeeName.toUpperCase();
            // console.log(name);
            var id=name.charAt(0);
            if(!(profile[id]&&profile[id].length)){
                profile[id]=[];
            }
            profile[id].push(element);
        });
         console.log(profile);
         return profile;
    }
  }

});