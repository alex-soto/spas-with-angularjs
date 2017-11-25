(function(){

angular.module('public')
.controller('SignUpController', SignUpController)

SignUpController.$inject = ['MenuService', 'UserInfoService'];

function SignUpController(MenuService, UserInfoService){
  var ctrl = this;
  ctrl.error = '';
  ctrl.success = '';

  ctrl.resetError = function() {
    ctrl.error = '';
  };

  ctrl.submit = function () {
    MenuService.getMenuItemByName(ctrl.user.favorite)
      .then(function(response) {
        ctrl.user.favoriteData = response;
        UserInfoService.setUserInfo(ctrl.user);
        ctrl.success = 'Your information has been saved';
      }, function(error) {
        ctrl.error = error;

      });
  };
  /* first name, last name, email address, and phone number.
  It should also ask the user to specify the menu number that's their favorite dish.
  (The menu number is the short_name attribute of each menu item). */

} // SignUpController
})();
