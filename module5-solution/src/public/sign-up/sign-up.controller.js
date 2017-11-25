(function(){

angular.module('public')
.controller('SignUpController', SignUpController)

SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService){
  var ctrl = this;
  ctrl.error = '';

  ctrl.resetError = function() {
    ctrl.error = '';
  };

  ctrl.submit = function () {
    console.log(ctrl.user);
    MenuService.getMenuItemByName(ctrl.user.favorite)
      .then(function(response) {
        console.log(response);
      }, function(error) {
        ctrl.error = error;
        console.log(error);
      });
  };
  /* first name, last name, email address, and phone number.
  It should also ask the user to specify the menu number that's their favorite dish.
  (The menu number is the short_name attribute of each menu item). */

} // SignUpController
})();
