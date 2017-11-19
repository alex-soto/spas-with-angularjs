(function(){
  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];

  function MenuDataService($http, ApiBasePath){
    var service = this;

    service.getAllCategories = function () {
      return $http({
        url: ApiBasePath + '/categories.json'
      })
      .then(function (response) {
        return response.data;
      }, function (error) {
        return error;
      });

    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        url: ApiBasePath + '/menu_items.json',
        params: {
          'category': categoryShortName
        }
      })
      .then(function (response) {
        return response.data;
      }, function (error) {
        return error;
      });
    };
  } // MenuDataService
}());
