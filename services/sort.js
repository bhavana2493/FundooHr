angular.module('mainApp').service('sortService', function () {

  return {
    sorting: function (data) {
        dataAll =data.data.employeeList;
        // points.sort(function(a, b){return a-b});
        //dataAll  sortBy employeename
        dataAll.sort(function(a, b){
             var nameA = a.employeeName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.employeeName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
        return 1;
    }
        // names must be equal
    return 0;
        });
       // console.log(dataAll);

        return dataAll;
    }
  }

});