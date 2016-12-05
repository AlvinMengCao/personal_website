/**
 * Created by alvin on 12/4/16.
 */
angular.module('jing',[])
    .controller('JingController', function($http,$route,$scope){
    $scope.currentDIV = 0;


    $scope.setDIV = function(num){
        console.log("current selected div is" + num);
        $scope.currentDIV = num;
    }
    $scope.isCurrentDIV = function(num){
        console.log("this is isCurrentDIV");
        return $scope.currentDIV == num;
    }

    });