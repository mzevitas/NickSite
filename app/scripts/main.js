(function () {

   var app = angular.module('myApp', ['ui.router']);
            

       app.config (['$stateProvider', '$urlRouterProvider',
       function ($stateProvider, $urlRouterProvider) {
         
       
            $urlRouterProvider.otherwise('/');
            $stateProvider
           
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('events', {
                url: '/events',
                templateUrl: 'views/events.html'
            })
           .state('media', {
            url: '/media',
                templateUrl: 'views/media.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
             .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html'
           })
         }
         ]);

//     function widgetsController($scope, $route) {
//     $scope.$route = $route;
// }


app.controller('AppCtrl', function($scope) {
        $scope.select= function(item) {
           $scope.selected = item; 
         };
        $scope.isActive = function(item) {
           return $scope.selected === item;
            };
    });

    app.controller('routeCtrl', ['$scope', '$location', '$state', function($scope, $location, $state) {
    $scope.state = $state;
 }]);

   app.controller('MyCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
})



}());

