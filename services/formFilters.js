angular.module('mainApp').service('formFilters', function () {
    return {
        filltering: function (data, filters) {
            var results = data;
            for (var key in filters) {
                var profile = results;
                if (filters[key] != "") {
                    results = [];
                    profile.forEach(function (element) {
                        if (element[key].toUpperCase() == filters[key].toUpperCase()) {
                            results.push(element);
                        }
                    })
                }
            }
            console.log(results);
            return results;

        }
    }
})