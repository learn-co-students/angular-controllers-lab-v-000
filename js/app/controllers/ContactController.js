function ContactController() {
  var contact = this;
  contact.name = 'Bill Gates';
  contact.email = 'william@microsoft.com'
}

angular
  .module('app')
  .controller('ContactController', ContactController);
