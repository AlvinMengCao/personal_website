angular.module('readinglist',[])
    .controller('ReadingListController',function($http, $scope){
       $scope.list =[
        {temp2:'',temp1:'',id:1,title:'Baidu', url:"http://www.baidu.com",tag1:"Search", tag2:"Java", tag3:"Collections",tag4:'',tag5:'',date:new Date(),percentage:89},
        {temp2:'',temp1:'',id:2,title:'Google', url:"http://www.google.com",tag1:"Search", tag2:"Ruby", tag3:"Collections",tag4:'',tag5:'',date:new Date(),percentage:86},
        {temp2:'',temp1:'',id:3,title:'Zhihu', url:"http://www.zhihu.com",tag1:"Search", tag2:"Java", tag3:"Collections",tag4:'',tag5:'',date:new Date(),percentage:40},
        {temp2:'',temp1:'',id:4,title:'Sina Sina Sina', url:"http://www.sina.com",tag1:"Search", tag2:"Java", tag3:"Currency",tag4:'',tag5:'',date:new Date(),percentage:70},
        {temp2:'',temp1:'',id:5,title:'baidu', url:"http://www.baidu.com",tag1:"Search", tag2:"Java", tag3:"Collections",tag4:'',tag5:'',date:new Date(),percentage:30},
        {temp2:'',temp1:'',id:6,title:'baidu', url:"http://www.baidu.com",tag1:"Search", tag2:"Java", tag3:"Collections",tag4:'',tag5:'',date:new Date(),percentage:37},
        {temp2:'',temp1:'',id:7,title:'Sina Sinba Sina', url:"http://www.tianmao.com",tag1:"Shopping", tag2:"JS", tag3:"Hash",tag4:'',tag5:'',date:new Date(),percentage:10},
        {temp2:'',temp1:'',id:8,title:'Sina Sina Sina', url:"http://www.sina.com",tag1:"Search", tag2:"Java", tag3:"Currency",tag4:'',tag5:'',date:new Date(),percentage:50},
        {temp2:'',temp1:'',id:9,title:'baidu', url:"http://www.baidu.com",tag1:"Search", tag2:"Java", tag3:"Collections",tag4:'',tag5:'',date:new Date(),percentage:30},
        {temp2:'',temp1:'',id:10,title:'baidu', url:"http://www.baidu.com",tag1:"Search", tag2:"Java", tag3:"Collections",tag4:'',tag5:'',date:new Date(),percentage:20}
       ];

        $scope.currentCategory = 'null';
        $scope.categories=[];
        $scope.classes =["active","success","info","warning","danger"];

        $scope.title="";
        $scope.url="";
        $scope.tag1 = "";
        $scope.tag2 = "";
        $scope.tag3 = "";
        $scope.tag4 = "";
        $scope.tag5 = "";
        $scope.password = "";

        $scope.load = function(){
            $scope.categories = grabTag($scope.list);
        }

        $scope.isCurrentCategory=function(c){
            return $scope.currentCategory !== null && c === $scope.currentCategory;
        }
        $scope.setCurrentCategory=function (c) {
            $scope.currentCategory=c;
        };
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
            if ($scope.currentCategory == 'null') return true;
            if (data.tag1 == $scope.currentCategory || data.tag2 == $scope.currentCategory ||
                data.tag3 == $scope.currentCategory ||data.tag4 == $scope.currentCategory ||
                data.tag5 == $scope.currentCategory ){
                return true;
            }
            return false;
        }
        $scope.getClass = function(val){
            if (val <=20) return 'progress-bar-danger';
            if (val <=40) return 'progress-bar-warning';
            if (val <=60) return 'progress-bar-info';
            if (val <=80) return 'active';
            return 'progress-bar-success';
        }

        $scope.changePercentage = function(id, number, pass){
            if (pass != 920221){
                console.log("Wrong Password!");
            }else {
                console.log("Change it!");
            }
        }
        $scope.addNewArticle = function(){
            console.log($scope.title + "what");
            console.log($scope.url + "what");
            console.log($scope.tag1 + "what");
            console.log($scope.tag2 + "what");
            console.log($scope.tag3 + "what");
            console.log($scope.tag4 + "what");
            console.log($scope.tag5 + "what");
            console.log($scope.password + "what");
        }
    });
