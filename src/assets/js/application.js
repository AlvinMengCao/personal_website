
angular.module('application',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
               templateUrl: 'src/app/other/homepage.html'
            })
            .when('/profile',{
                templateUrl: 'src/app/about/myprofile.html'
            })

            .otherwise({
                redirectTo: '/'
            });

    }]);