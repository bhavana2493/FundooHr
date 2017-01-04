angular.module('mainApp').controller('EngCtrl', function ($scope, Myservice, $state, $location, $anchorScroll) {
    $state.go('home.Engineers');
    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var promise = Myservice.getdata();
    promise.then(function (data) {
        $scope.profile = data;
        // console.log($scope.profile);
        $(".A").addClass("active");
        $scope.scrollTo = function (id) {
            $(".alphabets li a").removeClass("active");
            // add class to the one we clicked
            $(".alphabets li ." + id).addClass("active");
            // $location.hash(id);
            // console.log($location.hash());
            // $anchorScroll();
            // $location.hash(" ");
            $('html,body').animate({ scrollTop: $("#" + id).offset().top - 100 }, 'slow');
        }
    });

});

// angular.module('mainApp').run(['$anchorScroll', function($anchorScroll) {
//       $anchorScroll.yOffset = 100;   // always scroll by 50 extra pixels
//     }])

