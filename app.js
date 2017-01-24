var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial','LocalStorageModule',
                                         'satellizer','toastr']);
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
    $urlRouterProvider.otherwise('/dash');
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
            controller: 'logoutCtrl'
        })
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl',
              resolve: {
                      loginRequired: loginRequired
                    }
        })
        .state('home.DashBoard',{
            url:'dash',
            templateUrl: 'templates/dash.html',
            controller: 'dashCtrl',
              resolve: {
                      loginRequired: loginRequired
                    }
        })
        .state('home.Engineers',{
            url:'engineers',
            templateUrl: 'templates/engineers.html',
            controller: 'engCtrl',
              resolve: {
                      loginRequired: loginRequired
                    }
        })


});
