(function(){
  var menuApp = angular.module('menuApp');

  menuApp.controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['items'];

  function MenuItemsController(items){
    var ctrl = this;
    ctrl.category = items.category.name;
    ctrl.menuItems = items.menu_items;
  }

}());
