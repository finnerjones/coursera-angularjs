(function () {
'use strict'

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
// one service to rule them all :)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  toBuyCtrl.toBuyItems = ShoppingListCheckOffService.toBuyItems;

  toBuyCtrl.itemBought = function (item) {
    ShoppingListCheckOffService.itemBought(item);
  };

}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.boughtItems = ShoppingListCheckOffService.getItemsBought();

  boughtCtrl.getItemsBought = function () {
    boughtCtrl.boughtItems = ShoppingListCheckOffService.getItemsBought();
  }

}

// .service(...)  => Singleton
function ShoppingListCheckOffService() {
  var service = this;   // .service pattern

  // list of To Buy items
  service.toBuyItems = [
    { name: "jar of Dark Chocolate (Orange) Fondue", quantity: 2 },
    { name: "Bananas", quantity: 4 },
    { name: "Apples", quantity: 2 },
    { name: "Kiwis", quantity: 2 },
    { name: "Pears", quantity: 2 }
  ];
  // list of boughtItems
  service.boughtItems;

  service.itemBought = function (item) {
    service.toBuyItems.splice(item, 1);
    if (!service.boughtItems) {
      service.boughtItems = [];   // initialize the list in order to add an item
    }
    service.boughtItems.push(item);
  };

  service.getItemsToBuy = function () {
    return service.toBuyItems;
  };

  service.getItemsBought = function () {
    return service.boughtItems;
  };



}

})();
