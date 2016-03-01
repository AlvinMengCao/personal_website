/**
 * Created by alvin on 2/29/16.
 */
angular.module('job',[])
    .controller('BlogController',function($http){
        var blog =this;
        blog.lists=[];

        this.load = function(){
            $http.get("http://alvin-api.herokuapp.com/application/blogs")
                .success(function(data){
                    blog.lists=data;
                });
        };



    });