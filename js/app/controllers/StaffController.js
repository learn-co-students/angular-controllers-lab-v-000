function StaffController() {
  var staff = this;
  staff.name = 'Steve Jobs';
  staff.email = 'steve@apple.com';
}

angular
  .module('app')
  .controller('StaffController', StaffController);
