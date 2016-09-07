angular.module('project',[])
    .controller('ProjectController', function($location, $anchorScroll){

        this.tab = 1;
        this.back_front = 1;
        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
        this.setBackFront = function(id){
            this.back_front = id;
        }
        this.isBackFront = function(id){
            return this.back_front === id;
        }
    });