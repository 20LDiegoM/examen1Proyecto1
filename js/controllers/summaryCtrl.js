angular.module('bankCR', ['ngRoute'])
.controller('summaryCtrl', ['$scope', 'registerService', 'transfersServices', 'summaryServices', '$localStorage', 'getStorage',
  function ($scope, registerService, transfersServices, summaryServices, $localStorage, getLocalStorage) {
    $scope.name = registerService.ownerName;
    $scope.date = transfersServices.currentDate;
    $scope.transfers = getLocalStorage.gettransfers();
    $scope.accountsType = registerService.accountType;

    $scope.addClient = function() {
      $scope.name = angular.element('name').value;
    }
    $scope.removeItem = function() {
      $scope.transfers.splice($scope.toRemove, 1);

    };
}]);
