/**
 * Created by alvin on 12/4/16.
 */
angular.module('jing',[])
    .controller('JingController', function($http,$route,$scope){
    $scope.currentDIV = 0;



    $scope.setDIV = function(num){
        $scope.currentDIV = num;
    }
    $scope.isCurrentDIV = function(num){
        return $scope.currentDIV == num;
    }

    });