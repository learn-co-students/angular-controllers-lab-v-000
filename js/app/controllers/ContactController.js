function ContactController($scope) {
    this.name = 'Bill Gates';
    this.email = 'william@microsoft.com'

    var contact = this
}

angular
    .module('app')
    .controller('ContactController', ContactController);
