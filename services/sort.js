angular.module('mainApp').service('Sortservice', function () {

  return {
    sorting: function (data) {
        console.log(data.data.employeeList);
        dataAll =data.data.employeeList;
        // points.sort(function(a, b){return a-b});
        //dataAll=_.sortBy(dataAll,'name');
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
        // console.log(profile);
        return profile;
    }
  }

});