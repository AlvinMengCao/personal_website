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
    $scope.prevPart = function(){
        console.log("prevpart");
        if($scope.currentDIV >1){
           $scope.currentDIV = $scope.currentDIV - 1;
        }
    }

    $scope.nextPart = function(){
        console.log("next part");
            if($scope.currentDIV <9){
                $scope.currentDIV = $scope.currentDIV + 1;
            }
        }

    });