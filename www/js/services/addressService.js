angular.module('addressApp').service('addressService', function ($http, API) {

  this.createAddress = function (addressData) {
    return $http({
      method: 'POST',
      url: API.SERVER_HEROKU + 'address',
      dataType: 'JSON',
      data: addressData
    }).then(function (response) {
      return response.data;
    })
  };


  this.updateAddress = function (addressData) {
    return $http({
      method: 'PUT',
      url: API.SERVER_HEROKU + 'address/' + addressData.id,
      dataType: 'JSON',
      data: addressData
    }).then(function (response) {
      return response.data;
    })
  };


}); // END SERVICE //