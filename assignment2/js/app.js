(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = function() {
      return ShoppingListCheckOffService.itemsToBuy;
    };
    toBuy.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = function() {
      return ShoppingListCheckOffService.itemsBought;
    };
  };

  function ShoppingListCheckOffService() {
    var service = this;

    service.itemsToBuy = [
      {name: "cookies", quantity: 10},
      {name: "donuts", quantity: 20},
      {name: "chocolates", quantity: 50},
      {name: "chips", quantity: 10},
      {name: "ice creams", quantity: 5}
    ];

    service.itemsBought = [
    ];

    service.buyItem = function (itemIndex) {
      var item = service.itemsToBuy.splice(itemIndex, 1);
      service.itemsBought.push(item[0]);
    };

  };


})();
