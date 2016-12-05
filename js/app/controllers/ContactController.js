function ContactController($scope) {
    $scope.name = 'Bill Gates';
    $scope.email = 'bill@microsoft.com';
    $scope.title = "Founder";
}

angular
    .module('app')
    .controller('ContactController', ContactController);
