/**
 * Created by alvin on 3/12/16.
 */
angular.module('photos',[])
    .controller('PhotosController', function($http,$route,$scope){

        $scope.gallery = [];
        $scope.base_url = "https://alvin-api.herokuapp.com/application/";
        $scope.password = "";
        $scope.title = "";
        $scope.description ="";
        
        //load data before page layout
        $scope.load = function(){
            $http.get($scope.base_url + "photos/gallery")
                .success(function (data) {
                   $scope.gallery = data;
                    console.log($scope.gallery);
                });
        };
        $scope.addGallery = function () {
            if ($scope.password == 920221){
                $http({
                    method:'POST',
                    url:$scope.base_url+'photos/gallery',
                    params:{
                        title: $scope.title,
                        description: $scope.description
                    }
                }).then(function(data){
                    $route.reload();
                });
            }
        };
    });