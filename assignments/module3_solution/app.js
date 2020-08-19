(function(){
    'use strict'
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',FoundItems)
    .controller('FoundItemsController',FoundItemsController)


    function FoundItems(){
        var ddo = {
            templateUrl:'foundMenuItems.html',
            scope:{
                items:'<found',
                onRemove:'&'
            },
            controller:'FoundItemsController as list',
            bindToController:true,
        } 
        return ddo;
    }

    function FoundItemsController(){
        var list = this;
        list.cookieInList = function(){
            return list.items.some(item => item.description.indexOf('beef') !==-1)
        };
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var self = this;
        self.title = "Menu app";
        self.searchingValue = "";

        self.menuFounds = [];

        self.searchingItems = function(){
            MenuSearchService.getMatchedMenuItems(self.searchingValue).then(res=> {
                self.menuFounds = res;
            })
        }
        
        self.removeItem = function(index){
            self.menuFounds.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var service = this;
        const MENU_URL = "https://davids-restaurant.herokuapp.com/menu_items.json";

        service.getMatchedMenuItems = function(searchingValue){
            return $http({
                method:'GET',
                url:(MENU_URL)
            }).then(result => result.data.menu_items.filter(item => item.description.toLowerCase().indexOf(searchingValue.toLowerCase()) !==-1));
        }
    }
})()