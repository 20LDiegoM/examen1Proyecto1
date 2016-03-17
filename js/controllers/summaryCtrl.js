angular.module('bankCR')
.controller('summaryCtrl', ['$scope', 'registerService', 'transfersServices', 'summaryServices', '$localStorage', 'getStorage',
  function ($scope, registerService, transfersServices, summaryServices, $localStorage, getStorage) {
    $scope.names = registerService.names;
    $scope.date = transfersServices.currentDate;
    $scope.transfers = getStorage.getTransfers();
    $scope.accountType = registerService.accountType;

    $scope.addClient = function() {
      $scope.name = angular.element('name').value;
    }
    $scope.removeItem = function() {
      $scope.transfers.splice($scope.toRemove, 1);

    };
}]);
