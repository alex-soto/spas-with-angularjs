(function(){
  angular.module('menuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })
      .state('home.categories', {
        url: 'categories',
        templateUrl: 'src/menuapp/templates/categories.template.html',
        controller: 'CategoriesController as catCtrl'
        ,
        resolve: {
          categories: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('home.items', {
        url: 'items/{categoryShortName}',
        templateUrl: 'src/menuapp/templates/items.template.html',
        controller: 'MenuItemsController as itemsCtrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
  } // RoutesConfig
}());
