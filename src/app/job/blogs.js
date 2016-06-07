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
        $scope.currentPage = 0;
        $scope.numPerPage = 10;
        $scope.maxSize = 5;

        //页面显示之前加载数据，通过页面中的ng-init调用
        $scope.load = function(){
            $scope.currentPage = 0;
            $http.get($scope.base_url + "blogs")
                .success(function(data){
                    $scope.lists = data;
                    console.log(data);
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

        $scope.makeTodos = function() {
            $scope.todos = [];
            for (i=1;i<=200;i++) {
                $scope.todos.push({ text:'todo '+i, done:false});
            }
        };
        $scope.makeTodos();

        //监听分页
        $scope.$watch('currentPage + numPerPage', function(){
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;
            $scope.filteredTodos = $scope.comments.slice(begin, end);
            console.log("size of filteredTodos is " + ($scope.filteredTodos.length));

        });


    });