var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'satellizer','toastr']);
mainApp.config( function ($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
    var skipIfLoggedIn = ['$q', '$auth', function ($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }];
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        })
        .state('logout', {
            url: '/logout',
            template: null,
            controller: 'LogoutCtrl'
        })
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
              resolve: {
                      loginRequired: loginRequired
                    }
        });

});
