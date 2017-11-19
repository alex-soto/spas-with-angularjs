(function(){
  angular.module('menuApp')
    .component('categories', {
      templateUrl: 'src/menuapp/templates/cat-list.template.html',
      bindings: {
        categories: '<'
      }
    });
}());
