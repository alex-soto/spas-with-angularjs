(function(){
  var myApp = angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var toBuy = this;
    
    toBuy.items = ShoppingListCheckOffService.toBuyItems;

    toBuy.buyItem = function (index) {
      ShoppingListCheckOffService.moveItemToBought(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.boughtItems;
  }

  function ShoppingListCheckOffService () {
    var service = this;

    service.toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 5 },
      { name: "milk", quantity: 2 },
      { name: "apples", quantity: 8 },
      { name: "bananas", quantity: 12 }
    ];

    service.boughtItems = [];

    service.moveItemToBought = function (index) {
      var boughtItem = service.toBuyItems.splice(index, 1)[0];
      service.boughtItems.push(boughtItem);
    };
  }

}());
