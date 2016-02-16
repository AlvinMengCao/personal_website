angular.module('photo_gallery',[])
    .controller('PhotoCtrl',function(){
        this.a=123;
        this.photo=photos[0];



});

 var photos=[
     [{ title:'title1',
        url:'navbar/church.png',
         num:0

     },{
         title:'title2',
         url:'navbar/job-related.png',
         num:1

     },{
         title:'title3',
         url:'navbar/life.png',
         num:2
     }],
     []




 ];