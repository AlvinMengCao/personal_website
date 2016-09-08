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
        $scope.category ="";
        
        //load data before page layout
        $scope.load = function(){
            $http.get($scope.base_url + "photos/gallery")
                .success(function (data) {
                   $scope.gallery = data;
                    $scope.categories = grabCategory(data);
                });
        };
        $scope.addGallery = function () {
            if ($scope.password == 920221){
                $http({
                    method:'POST',
                    url:$scope.base_url+'photos/gallery',
                    params:{
                        title: $scope.title,
                        description: $scope.description,
                        category:$scope.category
                    }
                }).then(function(data){
                    $route.reload();
                });
            }
        };


        $scope.currentCategory = null;
        $scope.categories=[];
        $scope.isCurrentCategory=function(c){
            return $scope.currentCategory !== null && c === $scope.currentCategory;   
        }
        $scope.setCurrentCategory=function (c) {
            $scope.currentCategory=c;
            console.log("set current category" + c);
        };
        function grabCategory(data){
            var listMap = [];
            var list2 = [];
            for (var i = 0; i < data.length;i++){
                var category = data[i].category;
                if (!!listMap[category]){
                    listMap[category] ++;
                } else {
                    listMap[category] = 1;
                }
            }
            for (var item in listMap){
                list2.push({
                    name: item,
                    num:listMap[item]
                });
            }
            return list2;
        }

        $scope.currentDescription = "default description";
        $scope.setCurrentDescription = function(description){
            $scope.currentDescription = description;
            console.log("set current description:" +description);
        };
    });