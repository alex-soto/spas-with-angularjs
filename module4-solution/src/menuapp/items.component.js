(function(){
 var menuApp = angular.module('menuApp');
 menuApp.component('items', {
   templateUrl: 'src/menuapp/templates/menu-items.template.html',
   bindings: {
     menuItems: '<'
   }
 });
}());
