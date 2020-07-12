(function(){
    'use strict'//in order to leaking some variable into global scope;

    angular.module('AngularJsApp',[])//second argument is the dependency
    .controller('FoodEatingController',FoodEatingController);

    FoodEatingController.$inject = ['$scope'];//avoid problem of minification.

    function FoodEatingController($scope){
        $scope.listFoods = "";
        $scope.state = {};
        $scope.checkingStates = function (){
            $scope.totalFoodNumber = countFoodNumber($scope.listFoods);
            $scope.state = updatingState($scope.totalFoodNumber);
        }
    }

    function countFoodNumber(listFoods){
        if(listFoods === '') return 0;
        let arrFoods = listFoods.split(',').filter(el=>el.trim() !=='');
        return arrFoods.length;
    }

    function updatingState(numberFoods){//string;
        if (numberFoods === 0) {
            return {state:'Please enter data first',warning:true};
        } else if (numberFoods < 4) {
            return {state:'Enjoy',warning:false};
        } else {
            return {state:'Too much',warning:true};
        }
    }
})()