(function(){
    'use strict'
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

    ToBuyController.$insert = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var self = this;
        self.items = ShoppingListCheckOffService.getToBuyItems();

        self.updateItem = function(name,quantity){
            ShoppingListCheckOffService.updateItem(name,quantity);
            self.items = ShoppingListCheckOffService.getToBuyItems();
        }
    }
    
    AlreadyBoughtController.$insert = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var self = this;
        self.items = ShoppingListCheckOffService.getBoughtItems();
    }

    //service: function as contructor
    function ShoppingListCheckOffService(){
        var service = this;
        var toBuyItems = [
            { name: "Brocoli", quantity: 2,},
            { name: "Bœuf", quantity: 4,}
        ]

        var BoughtItems = [
            { name: "cookies", quantity: 10,},
            { name: "Cerise", quantity: 3,},
            { name: "Pastèque", quantity: 1,},
        ]        
        service.updateItem = function(name,quantity){
            toBuyItems = toBuyItems.filter(item=> item.name !== name && item.quantity !== quantity);
            BoughtItems.push({name,quantity});
        }

        service.getToBuyItems = function(){
            return toBuyItems;
        }

        service.getBoughtItems = function(){
            return BoughtItems;
        }
    }
})()