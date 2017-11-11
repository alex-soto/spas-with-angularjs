(function(){
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var ctrl = this;
    ctrl.searchTerm = '';

    ctrl.narrowItDown = function () {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
        .then(function(result) {
          ctrl.found = result;
        });
    };

    ctrl.removeItem = function (index) {
      ctrl.found.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService ($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      var term = searchTerm.toLowerCase();
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json')
      }).then(function(result) {
          var foundItems = result.data.menu_items.filter(function(item) {
            return (term && item.description.toLowerCase().indexOf(term) >= 0);
          });
          return foundItems;
        });
    }
  }

  function FoundItemsDirective () {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController () {
    var ctrl = this;
    ctrl.title = "Items found:"

    ctrl.nothingFound = function () {
      return (ctrl.found && ctrl.found.length === 0);
    }
  }

}());
