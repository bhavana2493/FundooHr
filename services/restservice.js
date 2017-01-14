// restServices rest call with baseurl
angular.module('mainApp').service('restService', function ($http, $log, $q) {
    var baseUrl = "http://192.168.0.171:3000/";
    //    function for GET
    this.getRequest = function (path, query) {
        
        var deferred = $q.defer();
        $http({
            "method": "GET",
            "url": baseUrl + path,
            "data": query
            // "url": "employee.json"
        }).then(function (data) {
            //sending data...
            deferred.resolve(data);
        }), function (msg, code) {
            deferred.reject(msg);

            $log.error(msg, code);
        };
        return deferred.promise;
    };
    // //  function to POST
    //     this.postRequest = function (path, data, cb) {

    //         var postR = $http.post(baseUrl + path, data).success(function (data) {

    //             cb(data, null);

    //         }).error(function (err) {
    //             alert('Sorry!! something went wrong....');
    //             cb(null, err);
    //         });
    //         return postR;
    //     };

});
