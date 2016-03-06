/**
 * Created by alvin on 2/29/16.
 */
angular.module('blog',[])
    .controller('BlogController',function($http,$route){
        var blog = this;
        blog.base_url = "https://alvin-api.herokuapp.com/application/";
        blog.lists = [];
        blog.comments = [];
        blog.blog_number = 0;
        blog.comment_number = 0;
        blog.name = "";
        blog.email = "";
        blog.comment = "";

        this.load = function(){
            $http.get(blog.base_url + "blogs")
                .success(function(data){
                    blog.lists = data;
                    blog.blog_number = Object.keys(data).length;
                });

            $http.get(blog.base_url + "blogcomments")
                .success(function(data){
                    blog.comments = data;
                    blog.comment_number = Object.keys(data).length;
                });


        };

        this.addComment = function(){
            $http({
                method:'POST',
                url: blog.base_url + 'blogcomments',
                params: {
                    email: blog.email,
                    name:blog.name,
                    comment:blog.comment
                }
            }).then(function(data){
                $route.reload();
                })
       };

        this.addBlog = function(){
            $http({
                method:'POST',
                url: blog.base_url + 'blogs',
                params: {
                    email: blog.email,
                    name:blog.name,
                    comment:blog.comment
                }
            }).then(function(data){
                $route.reload();
            })
        };


    });