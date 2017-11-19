(function(){
  var menuApp = angular.module('menuApp');

  menuApp.controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];

  function CategoriesController(categories) {
    var ctrl = this;
    ctrl.categories = categories;
  }

}());
