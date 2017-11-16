(function(){
  angular.module('menuApp')
    .component('categories', {
      templateUrl: 'src/menuapp/templates/categories.template.html',
      bindings: {
        categories: '<'
      }
    });
}());
