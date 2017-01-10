angular.module('mainApp').controller('engCtrl', function ($scope, empService, $state,formFilters, 
                                        $location) {
    $state.go('home.Engineers');
    $scope.filters = {employeeName: "",employeeStatus: "",company: ""};
    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // data loading icon...
    var data;
    $scope.dataLoading = true;
    //calling empService for data...
    var promise = empService.getdata();
    promise.then(function (data) {
        data=data
        $scope.profile = empService.createSection(data);
        $scope.dataLoading = false;
        //starting always A anchor will be active
        $(".A").addClass("active");
        //after clicking anchor tag..
        $scope.scrollTo = function (id) {
            //removing active class from all the achor tag
            $(".alphabets li a").removeClass("active");
            // add class to the one we clicked
            $(".alphabets li ." + id).addClass("active");
            //it will scroll to the particular section
            $('html,body').animate({ scrollTop: $("#" + id).offset().top - 130 }, 'slow');
        }
        $scope.filterData=function(){
            $scope.errorpage=false;
            var filteredData=formFilters.filltering(data,$scope.filters);
            if(filteredData.length!=0){
                $scope.profile= empService.createSection(filteredData);
            }
            else{
                $scope.profile= empService.createSection(filteredData);
                $scope.errorpage=true;
            }
        }
    });

});

