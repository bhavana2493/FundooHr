angular.module('mainApp').controller('engCtrl', function ($scope, engService, $state, restService, localStorageService) {
    $scope.filters = { employeeName: "", employeeStatus: "", company: "" };
    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var data;

    //calling empService for data...
    var token = localStorageService.get('token');
    // data loading icon...
    //Engineer page display..
    $scope.engPage = function () {

        $scope.dataLoading = true;
        var query = { token: token };
        //restService call for fetching data
        var promise = restService.getRequest('searchEmployeeByName', query)
        promise.then(function (data) {
            data = engService.sorting(data);
            $scope.profile = engService.createSection(data);
            $scope.dataLoading = false;

            /*
            *after clicking anchor tag..
            */
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
                var filteredData = engService.filltering(data, $scope.filters);
                if (filteredData.length != 0) {
                    $scope.profile = engService.createSection(filteredData);
                }
                else {
                    $scope.profile = engService.createSection(filteredData);
                    $scope.errorpage = true;
                }
                $('.dropdown.open .dropdown-toggle').dropdown('toggle');
            }
        });
    }

});

