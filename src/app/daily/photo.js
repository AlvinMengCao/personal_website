/**
 * Created by alvin on 6/6/16.
 */
angular.module('photo',[])
    .controller('PhotoController', function ($http,$route,$scope,$routeParams) {
        $scope.title = "I am a default titme";
        $scope.base_url = "https://alvin-api.herokuapp.com/application/";
        $scope.list = [];
        $scope.load = function(){
            $scope.title = $routeParams.title;
            $http.get($scope.base_url+"photos/path/"+$scope.title)
                .success(function (data) {
                    $scope.list = data;
                    console.log($scope.list);
                });
        };
    });