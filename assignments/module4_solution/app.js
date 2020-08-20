(function(){
    'use strict'
    angular.module('MenuApp',['ui.router']);

    angular.module('MenuApp').config(RoutesConfig)


    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/tab1');

        $stateProvider.state('/tab1',{
            url:'/tab1',
            template:'<div>This is TAB 1 here</div>'
        });
    }
})()