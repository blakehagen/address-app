angular.module('addressApp').controller('connectCtrl', function ($cordovaContacts, $ionicPlatform) {

  var connectCtrl = this;

  // GET CONTACTS ON DEVICE //
  $ionicPlatform.ready(function () {

    connectCtrl.getContacts = function () {
      connectCtrl.phoneContacts = [];

      function onSuccess(contacts) {
        _.each(contacts, function (contact) {
          var contactObj = {};
          _.each(contact.phoneNumbers, function (number) {
            var type = number.type;
            contactObj.name = contact.name.formatted;
            contactObj[type] = number.value;
          });
          connectCtrl.phoneContacts.push(contactObj);
        });
      }

      function onError(contactError) {
        alert(contactError);
      }

      var options      = {};
      options.multiple = true;

      $cordovaContacts.find(options).then(onSuccess, onError);
    };
  });


}); // END CTRL //