(function(){
  angular.module('common')
  .service('UserInfoService', UserInfoService);

  function UserInfoService () {
    var service = this;
    service.userInfo;

    service.setUserInfo = function (userInfo) {
      service.userInfo = userInfo;
      console.log('userInfoService: user info set.')
      console.log(service.userInfo);
    };

    service.getUserInfo = function () {
      return service.userInfo;
    };

  } //UserInfoService

})();
