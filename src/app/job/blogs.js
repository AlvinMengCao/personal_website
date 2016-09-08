/**
 * Created by alvin on 2/29/16.
 */
angular.module('blog',['ui.bootstrap'])
    .controller('BlogController', function($http,$route,$scope){


        $scope.base_url = "https://alvin-api.herokuapp.com/application/";
        $scope.lists = [];
        $scope.comments = [];
        $scope.name = "";
        $scope.email = "";
        $scope.comment = "";

        //分页用到的常量。flteredTodos是当前页应该显示的视图。
        $scope.filteredTodos = [];
        $scope.currentPage = 1;
        $scope.numPerPage = 10;
        $scope.maxSize = 5;



        $scope.currentTag = 'null';
        $scope.tags = [];

        //页面显示之前加载数据，通过页面中的ng-init调用
        $scope.load = function(){
            $scope.currentPage = 0;
            $http.get($scope.base_url + "blogs")
                .success(function(data){
                    $scope.lists = data;
                    $scope.tags = grabTag(data);
                });
            $http.get($scope.base_url + "blogcomments")
                .success(function(data){
                    $scope.comments = data;
                }).then(function(data){
                    $scope.currentPage = 1;
                });

        };

        //增加一条评论时用到的方法
        $scope.addComment = function(){
            $http({
                method:'POST',
                url: $scope.base_url + 'blogcomments',
                params: {
                    email: $scope.email,
                    name:$scope.name,
                    comment:$scope.comment
                }
            }).then(function(data){
                $scope.currentPage = 1;
                $route.reload();
                });
       };

        $scope.isCurrentTag = function(c){
            return $scope.currentTag !== null && c === $scope.currentTag;
        }
        $scope.setCurrentTag = function(c) {
            $scope.currentTag = c;
        }
        function grabTag(data){
            var result = [];
            var result_end = [];
            for (var i = 0; i < data.length; i++){
                var tag1 = data[i].tag1;
                var tag2 = data[i].tag2;
                var tag3 = data[i].tag3;
                var tag4 = data[i].tag4;
                var tag5 = data[i].tag5;
                if (tag1 !== null && tag1 != ""){
                    if (!!result[tag1]){
                        result[tag1] ++;
                    } else {
                        result[tag1] = 1;
                    }
                }

                if (tag2 !== null && tag2 != ""){
                    if (!!result[tag2]){
                        result[tag2] ++;
                    } else {
                        result[tag2] = 1;
                    }
                }

                if (tag3 !== null && tag3 != ""){
                    if (!!result[tag3]){
                        result[tag3] ++;
                    } else {
                        result[tag3] = 1;
                    }
                }

                if (tag4 !== null && tag4 != ""){
                    if (!!result[tag4]){
                        result[tag4] ++;
                    } else {
                        result[tag4] = 1;
                    }
                }

                if (tag5 !== null && tag5 != ""){
                    if (!!result[tag5]){
                        result[tag5] ++;
                    } else {
                        result[tag5] = 1;
                    }
                }
            }
            for (var item in result){
                result_end.push({
                    name: item,
                    num: result[item]
                });
            }
            return result_end;
        }
        $scope.filterByTag = function(data){
            if ($scope.currentTag == 'null') return true;
            if (data.tag1 == $scope.currentTag || data.tag2 == $scope.currentTag ||
                data.tag3 == $scope.currentTag ||data.tag4 == $scope.currentTag ||
                data.tag5 == $scope.currentTag ){
                return true;
            }
            return false;
        }

        $scope.$watch('currentPage + numPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage);
            var end = begin + $scope.numPerPage;
            $scope.filteredTodos = $scope.comments.slice(begin, end);
        });
    });