angular.module('mainApp').controller('engCtrl', function ($scope, empService, $state, restService, localStorageService) {
    $state.go('home.Engineers');
    $scope.filters = { employeeName: "", employeeStatus: "", company: "" };
    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // data loading icon...
    var data;
    $scope.dataLoading = true;
    //calling empService for data...
    var token;
    localStorageService.get(token);
    var query = { token: "1a285sdffd8do8fd" };
    var promise = restService.getRequest('searchEmployeeByName', query)
    promise.then(function (data) {
        data = empService.sorting(data);
        $scope.profile = empService.createSection(data);
        $scope.dataLoading = false;
   


    //after clicking anchor tag..
    $scope.scrollTo = function (id) {
        //removing active class from all the achor tag
        $(".alphabets li a").removeClass("active");
        // add class to the one we clicked
        $(".alphabets li ." + id).addClass("active");
        //it will scroll to the particular section
        $('html,body').animate({ scrollTop: $("#" + id).offset().top - 120 }, 'slow');
    }

    $scope.filterData = function () {
        $scope.errorpage = false;
        var filteredData = empService.filltering(data, $scope.filters);
        if (filteredData.length != 0) {
            $scope.profile = empService.createSection(filteredData);
        }
        else {
            $scope.profile = empService.createSection(filteredData);
            $scope.errorpage = true;
        }
    }
     });

});

