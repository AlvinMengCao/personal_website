
angular.module('application',['ngRoute','skill','blog','photos','photo','readinglist','project'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
               templateUrl: 'src/app/other/homepage.html',

            })
            .when('/:whole_category/:page',{
                templateUrl: function(params) {
                                return 'src/app/'+params.whole_category+'/'+params.page+'.html';
                },

            })
            .otherwise({
                redirectTo: '/'
            });
    }]);