
angular.module('application',['ngRoute','skill','blog','photos','photo'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
               templateUrl: 'src/app/other/homepage.html',

            })
            .when('/:category/:page',{
                templateUrl: function(params) {
                                return 'src/app/'+params.category+'/'+params.page+'.html';
                },

            })
            .otherwise({
                redirectTo: '/'
            });
    }]);