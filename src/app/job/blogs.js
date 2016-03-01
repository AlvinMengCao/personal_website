/**
 * Created by alvin on 2/29/16.
 */
angular.module('job',[])
    .controller('BlogController',function($http){
        var blog = this;
        blog.lists = [];
        blog.comments = [];
        blog.blog_number = 0;
        blog.comment_number = 0;
        blog.name = "";
        blog.email = "";
        blog.comment = "";

        this.load = function(){
            $http.get("http://alvin-api.herokuapp.com/application/blogs")
                .success(function(data){
                    blog.lists = data;
                    blog.blog_number = Object.keys(data).length;
                });

            $http.get("http://alvin-api.herokuapp.com/application/website-comments")
                .success(function(data){
                    blog.comments = data;
                    blog.comment_number = Object.keys(data).length;
                });


        };
        this.addComment = function(){

            $http.post("http://alvin-api.herokuapp.com/application/website-comments?" +
                "email=" + blog.email + "&comment=" + blog.comment + "&name=" + blog.name,
                {}
            ).then(function(response){
                alert("success");
            });


        };



    });