(function(){
  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  
  function MenuDataService($http, ApiBasePath){
    var service = this;

    this.getAllCategories = function () {
      return $http({
        url: ApiBasePath + '/categories.json'
      })
      .then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });

    };

    this.getItemsForCategory = function (categoryShortName) {
      // menu_items.json?category=
      var params = {};
      if (categoryShortName){
        params.category = categoryShortName;
      }
      return $http({
        url: ApiBasePath + '/menu_items.json',
        params: params
      })
      .then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });
    };
  } // MenuDataService
}());
